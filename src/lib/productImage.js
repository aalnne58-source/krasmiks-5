// Сопоставление товара с изображением. Источники по убыванию точности:
//
//   1. skuPhotos      — фото из прайса поставщика, лежит у нас (Menzerna);
//   2. supplierPhotos — фото своего артикула на сайте поставщика, отдаётся
//                       прямой ссылкой с его сервера (ссылки взяты из столбца
//                       «Фото и описание» клиентского прайса);
//   3. библиотека «тип × бренд» в public/products/lib — одна картинка на всю
//      товарную группу: тип определяется по названию (RULES ниже).
//
// Фолбэка на «что-нибудь из этой категории» нет: если ничего не подошло,
// возвращается null и рисуется плейсхолдер с иконкой категории. Показать
// чужую упаковку хуже, чем не показать ничего.

import { skuPhotos } from '../data/skuPhotos.js';
import { supplierPhotos, SUPPLIER_HOST } from '../data/supplierPhotos.js';

// Превью в галерее поставщика. Берём product_slider: он всегда ровно 430x520,
// тогда как popup у разных товаров от 128 до 985 пикселей — для мелких
// оригиналов он оказывается меньше слайдерного и мылит на странице товара.
const SUPPLIER_VARIANT = 'galleries-product_slider';

// Порядок важен: от специфичного к общему.
const RULES = [
  // 1. Явные запчасти (привязка к модели инструмента / артикульный код)
  ['zapchast', /(для|к)\s*J-?\d{3,4}|J-?\d{4}[A-Z]?\b.*(для|запчаст)|^\d{3,4}[A-Z]\d+|запчаст|\/No\d|№\s?\d+\s*\//i],

  // 2. Комплектующие к краскопульту — по главному слову в начале названия.
  // Иначе "бачок для краскопульта" уедет в краскопульты и покажет пистолет.
  ['emkost', /^(одноразовый |многоразовый |верхний |нижний |сменный )*(пластиковый |нейлоновый |полипропиленовый |алюминиевый )*бачок|^стакан|^ведро|^воронк|^крышка/i],
  ['dyuza', /^дюза|^сопло|^игл[аы]|^[ёе]рш|^(комплект|набор)[^,]*дюз|^набор для чистки краскопульт|^ремкомплект|головк.*(воздушн|распылит)/i],
  ['podoshva', /подошв|опорн.*тарелк|тарелк[аи]|оправк|держател|прокладка защитн|интерфейсн.*прокладк|^адаптер/i],

  // 3. Инструмент и оборудование (до ЛКМ, иначе "краскопульт" ловится как "краска")
  ['pistolet-produvochnyy', /продувочн|пескоструйн|шприц|пистолет для (герметик|нанесен|подачи)|пистолет-|антигравийный пистолет|краскораспылитель для/i],
  ['kraskopult', /краскопульт|миникраскопульт|аэрограф|hvlp|lvlp|lvmp|hte\b|halo\b|spray ?gun|пистолет.*(окрас|покрас|нанесен)|окрасочный пистолет/i],
  ['shlifmashinka', /шлифмашин|(шлифовальн|полировальн)[а-я]* машин|\bмашинка\b|эксцентриков|орбитальн|ленточный напильник|пневмомашин/i],
  ['fitting', /переходник|штуцер|ниппель|соединител|штекер|пневморозетк|наконечник|быстросъ[её]м|муфта|тройник|коннектор|резьб[аоыу]|заглушка|регулятор давлен|манометр|влагоотделит/i],
  ['shlang', /шланг|рукав\b|катушка для шланга/i],
  ['emkost', /стакан|бачок|ведро|[ёе]мкост|система смешивани|мешалк|ситечк|воронк|крышка для|тест-пластин|линейка мерн|весы/i],
  ['sverlo', /сверло|фреза|борфреза|дырокол|кромкогиб|заклепочник|клещи|ключ |отв[её]ртк|шабер|шпател|молоток|зубило|пинцет|ножницы|степлер/i],
  ['blok-shlifovalnyy', /блок шлифовальн|рубанок|брусок шлифовальн|шлифок/i],
  ['meshok-pylesosa', /мешок.*(пылесос|абразив)|пылесборник|шланг пылесоса/i],
  ['svarka', /проволока сварочн|электрод|споттер|греб[её]нк|сварочн.*маск|шайба.*приварочн/i],
  ['veer-cvetovoy', /веер|каталог цвет|цветовой каталог|образцы цвет|каталог KNECHT/i],

  // 3. Фильтры
  ['filtr-maslyanyy', /фильтр масл/i],
  ['filtr-vozdushnyy', /фильтр воздушн/i],
  ['filtr-salonnyy', /фильтр салонн/i],
  ['filtr-toplivnyy', /фильтр топливн/i],
  ['filtr-respirator', /фильтр для полумаск|предфильтр|фильтр потолочн|фильтр напольн|фильтр для окрасочн/i],

  // 4. Абразивы, маскировка, укрывное
  ['krug-zachistnoy', /снятия ржавчин|зачистн|обдирочн|coarse ?clean|снятия скотча|для снятия двухсторонн/i],
  ['krug-polirovalnyy', /(круг|диск|накладк).*(полировал|полировоч|овчин|\bмех|фетр)|полировальн.*(круг|диск|накладк)|полировоч.*круг/i],
  ['abraziv-krug', /(круг|диск).*(шлифовальн|абразив|P[-\s]?\d{2,4}|липучк|отв\b|отверст)|P[-\s]?\d{2,4}.*(круг|диск)|(шлифовальн|абразивн).*(круг|диск)|лепестков/i],
  ['abraziv-list', /наждачк|рулон по сух|полоск|(лист|полос|бумаг|шкурк|абразив).*(P[-\s]?\d{2,4}|водостойк|абразивн)|абразив.*(лист|полос|микротонк)|wetodry/i],
  ['gubka-shlifovalnaya', /губка|скотч-?брайт|scotch.?brite|нетканый абразив|абразивн.*мочалк/i],
  ['lenta-maskiruyuschaya', /контурн.*лент|лент[аы] для маскир|маскирующ.*лент|лента маляр|малярн.*лент|washi|masking ?tape/i],
  ['lenta-dvustoronnyaya', /двусторонн|2-хсторонн|пенакрил|акриловая лент/i],
  ['lenta-prochaya', /\bлент[аы]\b|скотч|tape/i],
  ['plenka-ukryvnaya', /пл[её]нк|укрывн|маскировочн|чехол|коврик/i],
  ['salfetki', /салфетк|ветош|бумажн.*полотен|проти?роч|липк.*тряп|tack ?cloth/i],
  ['perchatki', /перчатк/i],
  ['respirator', /респиратор|полумаск|маск[аи]\b|очки|комбинезон|защитн.*костюм|бахилы|нарукавник/i],
  ['linza-maski', /линза|наголовник|стекло для маск/i],

  // 5. Полировка
  ['polirol-pasta', /полирол|паста|polish|compound|воск|wax|антиголограмм|cut ?force|final ?finish/i],

  // 6. ЛКМ
  ['pigment', /пигмент/i],
  ['baza-metallik', /base ?coat|базов|металлик|перламутр|компонент |mischlack|mix ?lack|тонер|оттеночн.*концентрат|xirallic/i],
  ['kraska-aerozol', /алкидн.*аэрозол|аэрозольн.*\d+\s?г|zink-?spray|(аэрозол|спрей|баллон|spray).*(краск|эмал|paint|цинк)|(краск|эмал|paint).*(аэрозол|спрей|баллон|spray)/i],
  ['grunt-aerozol', /(грунт|primer|филлер|filler).*(аэрозол|спрей|баллон|spray)|(аэрозол|спрей|баллон|spray).*(грунт|primer)/i],
  ['grunt', /грунт|primer|филлер|filler/i],
  ['otverditel', /отвердител|hardener|активатор/i],
  ['lak', /\bлак\b|лак\s|clear ?coat|klarlack|лак-/i],
  ['razbavitel', /разбавител|растворител|thinner|reducer|обезжирив|смывк|антисиликон/i],
  ['shpatlevka', /шпатл[её]вк|putty|spachtel/i],
  ['dobavka-lkm', /добавк|пластификатор|matting|эластичност|ускорител|биндер|binder|структурн.*добавк/i],
  ['kraska-banka', /краск|эмал|paint|топкоат|top ?coat|autolack/i],

  // 7. Химия и защита кузова
  ['germetik', /герметик|sealer|шовн|уплотнител.*шв/i],
  ['kley', /кле[йяюе]\b|adhesive|вклейк|адгезив|эпокси/i],
  ['antigraviy', /антиграв|гравитекс|gravit|мастик|антикор|body ?\d|защит.*закрыт.*профил/i],
  ['movil-antikor', /мовил|битум|bitumen|шумопоглощ|шумоизол|консервант порог|жидкие подкрылк|резинобитум/i],
  ['pokrytie-zaschitnoe', /защитн.*покрыт|покрытие защитн|protector|cobra|raptor|керамик|жидкое стекло/i],
  ['preobrazovatel-rzhavchiny', /преобразовател.*ржавчин|нейтрализатор ржавчин|rust ?(blaster|remover|converter)|нержавейк/i],
  ['smazka', /смазк|grease|lubricant|проникающ.*состав|wd-?40|размораживател/i],
  ['maslo-motornoe', /\batf\b|dexron|трансмиссионн|моторное масло|\bмасло\b|\d{1,2}w-?\d{2}|adblue/i],
  ['antifriz', /антифриз|тосол|охлаждающ|antifreeze|coolant|coldmaster/i],
  ['omyvatel', /омыват|стеклоочистит.*жидк|незамерз/i],
  ['prisadka', /присадк|кондиционер металла|цетан|октан|быстрая сталь|реметаллизант|раскоксов|очистител.*(инжектор|топливн|систем)/i],
  ['himchistka-salona', /химчистк|чистк[аи] (сидений|обивк|салон|пластик|кож)|обивк.*очист|очистител.*(обивк|салон|пластик|кож)/i],
  ['ochistitel', /очистител|cleaner|шампун|мойк|penetrus|для откручивания/i],
  ['aromatizator', /ароматизатор|освежител/i],
  ['schetka-stekloochistitelya', /бескаркасн|каркасн|щ[её]тк.*стеклоочист|дворник|special \d+.*\d+"|flat \d+/i],
];

// Для этих типов упаковка узнаваема — картинка обязана совпадать по бренду.
const BRAND_SENSITIVE = new Set([
  'baza-metallik', 'kraska-banka', 'kraska-aerozol', 'grunt', 'grunt-aerozol', 'lak',
  'otverditel', 'shpatlevka', 'razbavitel', 'polirol-pasta', 'maslo-motornoe', 'germetik',
  'antigraviy', 'movil-antikor', 'antifriz', 'ochistitel', 'smazka',
  'preobrazovatel-rzhavchiny', 'pokrytie-zaschitnoe', 'kley', 'dobavka-lkm',
]);

// Файлы, реально лежащие в public/products/lib (сгенерировано скриптом сборки).
const AVAILABLE = new Set([
  'abraziv-krug',
  'abraziv-list',
  'antifriz__eurofreeze',
  'antigraviy__agat',
  'antigraviy__dinitrol',
  'antigraviy__effect',
  'antigraviy__jeta-pro',
  'antigraviy__mipa',
  'antigraviy__novol',
  'antigraviy__oil-right',
  'antigraviy__relo',
  'antigraviy__vika',
  'aromatizator',
  'baza-metallik__armax',
  'baza-metallik__mipa',
  'baza-metallik__reoflex',
  'baza-metallik__vika',
  'blok-shlifovalnyy',
  'dobavka-lkm__mipa',
  'dobavka-lkm__novol',
  'dyuza',
  'emkost',
  'filtr-maslyanyy',
  'filtr-respirator',
  'filtr-salonnyy',
  'filtr-toplivnyy',
  'filtr-vozdushnyy',
  'fitting',
  'germetik__abro',
  'germetik__done-deal',
  'germetik__jeta-pro',
  'germetik__mipa',
  'germetik__novol',
  'germetik__russkiy-master',
  'grunt-aerozol__effect',
  'grunt-aerozol__jeta-pro',
  'grunt-aerozol__mipa',
  'grunt-aerozol__novol',
  'grunt-aerozol__vika',
  'grunt__jeta-pro',
  'grunt__mipa',
  'grunt__novol',
  'grunt__ranal',
  'grunt__relo',
  'grunt__reoflex',
  'grunt__vika',
  'gubka-shlifovalnaya',
  'himchistka-salona',
  'kraska-aerozol__abro',
  'kraska-aerozol__effect',
  'kraska-aerozol__jeta-pro',
  'kraska-aerozol__maxi-color',
  'kraska-aerozol__mipa',
  'kraska-aerozol__multona',
  'kraska-aerozol__novol',
  'kraska-aerozol__vika',
  'kraska-banka__colomix',
  'kraska-banka__holex',
  'kraska-banka__mipa',
  'kraska-banka__reoflex',
  'kraska-banka__russkiy-master',
  'kraska-banka__vika',
  'kraskopult',
  'krug-polirovalnyy',
  'krug-zachistnoy',
  'lak__baslac',
  'lak__jeta-pro',
  'lak__mipa',
  'lak__novol',
  'lak__reoflex',
  'lenta-dvustoronnyaya',
  'lenta-maskiruyuschaya',
  'linza-maski',
  'maslo-motornoe__alpine',
  'maslo-motornoe__avista',
  'maslo-motornoe__champion',
  'maslo-motornoe__comma',
  'maslo-motornoe__eni',
  'maslo-motornoe__fanfaro',
  'maslo-motornoe__favorit',
  'maslo-motornoe__mannol',
  'maslo-motornoe__wolf',
  'movil-antikor__agat',
  'movil-antikor__mipa',
  'ochistitel__agat',
  'ochistitel__atas',
  'ochistitel__hi-gear',
  'ochistitel__koto',
  'ochistitel__mannol',
  'otverditel__baslac',
  'otverditel__jeta-pro',
  'otverditel__mipa',
  'otverditel__novol',
  'otverditel__relo',
  'otverditel__reoflex',
  'perchatki',
  'pistolet-produvochnyy',
  'plenka-ukryvnaya',
  'podoshva',
  'pokrytie-zaschitnoe__mipa',
  'polirol-pasta__3m',
  'polirol-pasta__atas',
  'polirol-pasta__farecla',
  'polirol-pasta__k2',
  'polirol-pasta__menzerna',
  'polirol-pasta__mipa',
  'preobrazovatel-rzhavchiny__agat',
  'preobrazovatel-rzhavchiny__brunox',
  'prisadka',
  'razbavitel__agat',
  'razbavitel__jeta-pro',
  'razbavitel__mipa',
  'razbavitel__naftan',
  'razbavitel__novol',
  'razbavitel__relo',
  'respirator',
  'salfetki',
  'schetka-stekloochistitelya',
  'shlang',
  'shlifmashinka',
  'shpatlevka__jeta-pro',
  'shpatlevka__mipa',
  'shpatlevka__novol',
  'shpatlevka__reoflex',
  'shpatlevka__troton',
  'smazka__agat',
  'smazka__hi-gear',
  'smazka__oil-right',
  'smazka__presto',
  'smazka__wd-40',
  'svarka',
  'sverlo',
  'veer-cvetovoy',
  'zapchast',
]);

const TRANSLIT = {
  а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'e',ж:'zh',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',
  н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'h',ц:'c',ч:'ch',ш:'sh',щ:'sch',
  ъ:'',ы:'y',ь:'',э:'e',ю:'yu',я:'ya',
};

function brandSlug(brand) {
  return String(brand || '')
    .toLowerCase()
    .replace(/[^a-z0-9а-яё]+/gi, '-')
    .replace(/^-|-$/g, '')
    .replace(/[а-яё]/g, (c) => (c in TRANSLIT ? TRANSLIT[c] : c));
}

// Эти типы конкурируют внутри одного названия: «Шпатлёвка ... с отвердителем»,
// «Отвердитель для грунта», «Лак 2:1 + отвердитель». Побеждает тот, чьё слово
// стоит в названии раньше, — это и есть сам товар, остальное идёт в комплекте.
const AMBIGUOUS = new Set(['grunt', 'lak', 'shpatlevka', 'otverditel', 'razbavitel']);

export function productType(product) {
  const name = product.Наименование || product.name || '';
  for (const [type, re] of RULES) {
    if (!re.test(name)) continue;
    if (!AMBIGUOUS.has(type)) return type;
    let best = type;
    let bestAt = name.search(re);
    for (const [other, otherRe] of RULES) {
      if (other === type || !AMBIGUOUS.has(other)) continue;
      const at = name.search(otherRe);
      if (at !== -1 && at < bestAt) { best = other; bestAt = at; }
    }
    return best;
  }
  return null;
}

/** Адрес картинки товара или null, если подходящей нет. */
export function productImage(product) {
  const sku = String(product.sku || product.Артикул || '').split(/\s+/).join(' ').trim();
  const brand = product.Бренд || product.brand || '';
  const name = product.Наименование || product.name || '';

  if (sku) {
    const own = skuPhotos[`${brand}|${sku}`];
    if (own) return `/products/sku/${own}`;
  }

  const supplier = supplierPhotos[`${brand}|${sku || name}`];
  if (supplier) return `${SUPPLIER_HOST}/_thumbs/${SUPPLIER_VARIANT}/${supplier}`;

  const type = productType(product);
  const candidates = [];
  if (type) {
    if (BRAND_SENSITIVE.has(type)) candidates.push(`${type}__${brandSlug(brand)}`);
    else candidates.push(type);
  }
  for (const id of candidates) if (AVAILABLE.has(id)) return `/products/lib/${id}.jpg`;
  return null;
}
