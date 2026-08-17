# Изображения товаров

Библиотека: `public/products/lib/`. Подбор картинки — `src/lib/productImage.js`:
тип товара определяется регулярками по названию, бренд берётся из данных,
файл ищется по ключу `тип__бренд` (или просто `тип` там, где упаковка не
брендовая). Совпадения нет — карточка рисует заглушку с иконкой категории.

Изображения найдены поиском по каталогам производителей и дистрибьюторов
и нормализованы до 600×600 на белом фоне. Ниже — источник каждого файла.

| Файл | Тип | Бренд | Товаров | Источник |
| --- | --- | --- | ---: | --- |
| `baza-metallik__mipa.jpg` | baza-metallik | MIPA | 308 | https://avto-kraska.by/product-image/541/1748977760-mipa-bc.png |
| `zapchast.jpg` | zapchast | * | 299 | https://www.port3.ru/upload/iblock/d7e/auto_parts_toyota_prius.jpg |
| `fitting.jpg` | fitting | * | 268 | https://hydroscand.co.ua/image/cache/data/prom/114464048_w1280_h1280_logo-500x500.jpg |
| `abraziv-krug.jpg` | abraziv-krug | * | 181 | https://auto-point.ru/assets/images/products/2915/1619955bee8be252dff48b9d340e58942eb15289.jpg |
| `kraska-aerozol__multona.jpg` | kraska-aerozol | MULTONA | 177 | https://elitsa-3.bg/image/cache/catalog/oldimages/wp-content/uploads/2022/05/4545454-1600x1600h.jpg |
| `kraskopult.jpg` | kraskopult | * | 176 | https://image.kazanexpress.ru/ccss0sncvf7egqv411c0/original.jpg |
| `baza-metallik__vika.jpg` | baza-metallik | VIKA | 123 | https://ir.ozone.ru/s3/multimedia-d/6558373477.jpg |
| `kraska-banka__mipa.jpg` | kraska-banka | MIPA | 89 | https://mipa.com.ua/files/resized/products/toyota-040-akril.1800x1800w.jpg |
| `filtr-maslyanyy.jpg` | filtr-maslyanyy | * | 76 | https://static.onlinetrade.ru/img/items/m/knecht_mahle_oc196_1306861_1.jpg |
| `filtr-toplivnyy.jpg` | filtr-toplivnyy | * | 71 | https://images2.exist.ua/media/images/products/2020/11/45__VxZ52DW.jpg |
| `filtr-vozdushnyy.jpg` | filtr-vozdushnyy | * | 69 | https://images2.exist.ua/media/images/products/2020/03/7644690_14479472.jpg |
| `grunt__novol.jpg` | grunt | NOVOL | 58 | https://novol-professional.ru/image/cache/catalog/NOVOL PROF/GRUNT/90114-800x800.jpg |
| `lenta-maskiruyuschaya.jpg` | lenta-maskiruyuschaya | * | 54 | https://cdn.27.ua/sc--media--prod/default/1e/8c/6f/1e8c6fe5-206a-4ce2-b646-f95b196eb7f8.jpg |
| `abraziv-list.jpg` | abraziv-list | * | 49 | https://ae01.alicdn.com/kf/Sdd1f3c5e92044bc997f836b8167ba95br.jpg?width=800&amp;height=800&amp;hash=1600 |
| `otverditel__mipa.jpg` | otverditel | MIPA | 42 | https://images.prom.ua/1477905114_1477905114.jpg?PIMAGE_ID=1477905114 |
| `kraska-aerozol__mipa.jpg` | kraska-aerozol | MIPA | 40 | https://avto-kraska.by/product-image/1400/1759377963-1759352552-mipawinner.jpg |
| `shpatlevka__novol.jpg` | shpatlevka | NOVOL | 40 | https://ir.ozone.ru/s3/multimedia-4/c1000/6083241256.jpg |
| `kraska-aerozol__effect.jpg` | kraska-aerozol | EFFECT | 38 | https://amk-stroy.su/wp-content/uploads/2020/06/318625-scaled.jpg |
| `emkost.jpg` | emkost | * | 37 | https://cdn.vseinstrumenti.ru/images/goods/ruchnoj-instrument/malyarnyj-instrument/15453358/1000x1000/175415782.jpg |
| `kraska-aerozol__vika.jpg` | kraska-aerozol | VIKA | 37 | https://vika-color.ru/storage/product/1/TJiaS_WybZdfkWsEfBgCVG9kdz34vfwe.png |
| `shpatlevka__jeta-pro.jpg` | shpatlevka | Jeta Pro | 36 | https://ir.ozone.ru/s3/multimedia-1-h/7149750641.jpg |
| `krug-zachistnoy.jpg` | krug-zachistnoy | * | 36 | https://ir.ozone.ru/s3/multimedia-h/6654913613.jpg |
| `salfetki.jpg` | salfetki | * | 34 | https://www.pechatkin.org/image/cache/data-eco-salf-pr-10-600x600.jpg |
| `otverditel__novol.jpg` | otverditel | NOVOL | 31 | https://ir.ozone.ru/s3/multimedia-1-w/c1000/8885684516.jpg |
| `podoshva.jpg` | podoshva | * | 31 | https://cdn.vseinstrumenti.ru/images/goods/rashodnye-materialy-i-osnastka/rashodnye-materialy-dlya-instrumenta/12277349/1200x800/155997977.jpg |
| `lenta-dvustoronnyaya.jpg` | lenta-dvustoronnyaya | * | 31 | https://cdn1.ozone.ru/s3/multimedia-1-8/c600/6985753064.jpg |
| `shlifmashinka.jpg` | shlifmashinka | * | 30 | https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/pnevmoinstrument/7366297/1000x1000/80185357.jpg |
| `filtr-salonnyy.jpg` | filtr-salonnyy | * | 28 | https://avto-filter.ru/images/collection/product/763.jpg |
| `maslo-motornoe__comma.jpg` | maslo-motornoe | COMMA | 27 | https://main-cdn.sbermegamarket.ru/upload/IMG_20240328_150008_66054e7a867da.jpg |
| `grunt__mipa.jpg` | grunt | MIPA | 25 | https://kustomshop.ru/upload/PREVIEW/270x270/255_255_255/382a60bf_d2c1_11ed_8df5_f39f0c49192f_a56a65a8_d2c9_11ed_8df5_f39f0c49192f.jpg |
| `lak__novol.jpg` | lak | NOVOL | 24 | https://flip.com.ua/wa-data/public/shop/products/25/39/13925/images/10606/10606.1200x1200-novol-novakryl-hs.jpg |
| `polirol-pasta__atas.jpg` | polirol-pasta | ATAS | 23 | https://autobella.bg/wp-content/uploads/2020/01/FB_Post_Autobella_February_17.jpg |
| `maslo-motornoe__favorit.jpg` | maslo-motornoe | FAVORIT | 23 | https://aproteh.md/upload/products/big/0p2ogciv7d.jpg |
| `grunt__jeta-pro.jpg` | grunt | Jeta Pro | 22 | https://autofix.by/upload/iblock/fc4/odh6xxtqh6n002pbagzwiht38fns8r1h.jpg |
| `maslo-motornoe__mannol.jpg` | maslo-motornoe | MANNOL | 22 | https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtomobilnye-masla-i-smazki/1684541/1000x1000/152300840.jpg |
| `dyuza.jpg` | dyuza | * | 22 | https://cdn.vseinstrumenti.ru/images/goods/rashodnye-materialy-i-osnastka/rashodnye-materialy-dlya-instrumenta/18599418/1000x1000/192718542.jpg |
| `maslo-motornoe__eni.jpg` | maslo-motornoe | ENI | 21 | https://content.rozetka.com.ua/goods/images/big/319495342.jpg |
| `razbavitel__novol.jpg` | razbavitel | NOVOL | 20 | https://avtokraska-shop.storage.yandexcloud.net/iblock/c09/MG_6708.jpg |
| `pistolet-produvochnyy.jpg` | pistolet-produvochnyy | * | 20 | https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/pnevmoinstrument/977733/1200x800/164320411.jpg |
| `maslo-motornoe__wolf.jpg` | maslo-motornoe | WOLF | 19 | https://tk-barrel.ru/wp-content/uploads/2020/09/05922f5bdf22455ce1bb2cff891ce5d3ee9de40002.jpeg |
| `lak__mipa.jpg` | lak | MIPA | 18 | https://cdn1.ozone.ru/s3/multimedia-3/c600/6721204179.jpg |
| `antigraviy__dinitrol.jpg` | antigraviy | DINITROL | 18 | https://apm.by/wp-content/uploads/2020/02/dinitrol-447-antigravij-chyornyj-s-czinkom-1000ml.jpg |
| `gubka-shlifovalnaya.jpg` | gubka-shlifovalnaya | * | 18 | https://cdn.vseinstrumenti.ru/images/goods/rashodnye-materialy-i-osnastka/rashodnye-materialy-dlya-ruchnogo-instrumenta/7335307/1000x1000/165875569.jpg |
| `baza-metallik__reoflex.jpg` | baza-metallik | REOFLEX | 17 | https://autopolycolor.ru/upload/iblock/c17/nd91m2p619d8qp76exuiquc0cekdmhpc/emal_reoflex_bazovaya_690_snezhnaya_koroleva_1l.jpg |
| `otverditel__jeta-pro.jpg` | otverditel | Jeta Pro | 17 | https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtohimiya/1161577/1000x1000/51963004.jpg |
| `plenka-ukryvnaya.jpg` | plenka-ukryvnaya | * | 16 | https://ir.ozone.ru/s3/multimedia-s/c1000/6359368336.jpg |
| `polirol-pasta__menzerna.jpg` | polirol-pasta | Menzerna | 16 | legacy public/products/49.jpg |
| `baza-metallik__armax.jpg` | baza-metallik | ARMAX | 15 | https://ir.ozone.ru/s3/multimedia-1-c/c1000/8044079988.jpg |
| `ochistitel__hi-gear.jpg` | ochistitel | HI-GEAR | 15 | https://ir.ozone.ru/s3/multimedia-3/c1000/6646941327.jpg |
| `grunt-aerozol__mipa.jpg` | grunt-aerozol | MIPA | 15 | https://kustomshop.ru/upload/iblock/3ce/tp33geunj680uculza7eu09pgwcf5n7u/d5721a76_2dc1_11ec_8ded_f88bf6d92432_1867b0e4_3001_11ec_8ded_f88bf6d92432.jpg |
| `maslo-motornoe__fanfaro.jpg` | maslo-motornoe | FANFARO | 15 | https://st26.stpulscen.ru/images/product/234/604/701_original.jpg |
| `razbavitel__mipa.jpg` | razbavitel | MIPA | 15 | https://cdn1.ozone.ru/s3/multimedia-s/c600/6845993524.jpg |
| `shlang.jpg` | shlang | * | 15 | https://ir.ozone.ru/s3/multimedia-s/c1000/6100531720.jpg |
| `prisadka.jpg` | prisadka | * | 14 | https://images.prom.ua/6951338787_w640_h640_prisadka-v-dvigatel.jpg |
| `smazka__oil-right.jpg` | smazka | OIL RIGHT | 14 | https://ir.ozone.ru/s3/multimedia-1-1/9084774817.jpg |
| `svarka.jpg` | svarka | * | 14 | https://cdn.vseinstrumenti.ru/images/goods/rashodnye-materialy-i-osnastka/rashodnye-materialy-dlya-instrumenta/4967784/1200x800/64719330.jpg |
| `antigraviy__novol.jpg` | antigraviy | NOVOL | 13 | https://cdn1.ozone.ru/s3/multimedia-1-b/c600/7030075583.jpg |
| `schetka-stekloochistitelya.jpg` | schetka-stekloochistitelya | * | 13 | https://storage.yandexcloud.net/mostro-gm-media/6b0586a6-d62d-562a-eba4-157704437c6f/1.jpg |
| `maslo-motornoe__alpine.jpg` | maslo-motornoe | ALPINE | 13 | https://vencon.ua/uploads/goods/303952/main/alpine-0w-40-rs-4-l.jpg |
| `krug-polirovalnyy.jpg` | krug-polirovalnyy | * | 12 | https://static.insales-cdn.com/images/products/1/5650/612775442/2073148R.jpg |
| `himchistka-salona.jpg` | himchistka-salona | * | 11 | https://st49.stpulscen.ru/images/product/265/108/611_original.png |
| `veer-cvetovoy.jpg` | veer-cvetovoy | * | 11 | https://ral-farben.ru/wp-content/uploads/2021/02/RAL_K5_3пм11.jpg |
| `kraska-banka__vika.jpg` | kraska-banka | VIKA | 11 | https://cdn1.ozone.ru/s3/multimedia-k/c600/6084499832.jpg |
| `antifriz__eurofreeze.jpg` | antifriz | Eurofreeze | 11 | https://kama.by/assets/images/import_files/da/da0e76201ef711edbb357085c2a32fe4_da0e76211ef711edbb357085c2a32fe4.png |
| `otverditel__relo.jpg` | otverditel | RELO | 10 | https://federation.msk.ru/wp-content/webp-express/webp-images/uploads/2024/11/811020000-relocryl-2k-hs-acryl-klarlack-Lak-akrilovyy-s-otverditelem-15l.png.webp |
| `preobrazovatel-rzhavchiny__agat.jpg` | preobrazovatel-rzhavchiny | АГАТ | 10 | https://ir.ozone.ru/multimedia/c1000/1023550586.jpg |
| `razbavitel__jeta-pro.jpg` | razbavitel | Jeta Pro | 9 | https://cdn1.ozone.ru/s3/multimedia-1-6/c600/7047007422.jpg |
| `dobavka-lkm__mipa.jpg` | dobavka-lkm | MIPA | 8 | https://ir.ozone.ru/s3/multimedia-2/6583775042.jpg |
| `ochistitel__agat.jpg` | ochistitel | АГАТ | 8 | https://avtopasker.ru/photo/41380.jpg |
| `grunt-aerozol__novol.jpg` | grunt-aerozol | NOVOL | 8 | https://autofix.by/upload/iblock/8ab/xl3a8ke1t45exzrpsqfjzc4ygm4x0yij.jpeg |
| `lak__jeta-pro.jpg` | lak | Jeta Pro | 8 | https://ir.ozone.ru/s3/multimedia-1-p/8560279105.jpg |
| `sverlo.jpg` | sverlo | * | 8 | https://cdn.vseinstrumenti.ru/images/goods/rashodnye-materialy-i-osnastka/rashodnye-materialy-dlya-instrumenta/17875379/1000x1000/188750549.jpg |
| `preobrazovatel-rzhavchiny__brunox.jpg` | preobrazovatel-rzhavchiny | BRUNOX | 7 | https://darkskiff.com.ua/wp-content/uploads/2023/06/35034.jpg |
| `germetik__abro.jpg` | germetik | ABRO | 7 | https://ir.ozone.ru/s3/multimedia-l/c1000/6897274869.jpg |
| `germetik__done-deal.jpg` | germetik | Done Deal | 7 | https://main-cdn.sbermegamarket.ru/big1/hlr-system/1629098/100000421651b0.jpg |
| `antigraviy__jeta-pro.jpg` | antigraviy | Jeta Pro | 7 | https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtohimiya/1229231/1000x1000/152291696.jpg |
| `antigraviy__mipa.jpg` | antigraviy | MIPA | 7 | https://cdn1.ozone.ru/s3/multimedia-2/c600/6741910874.jpg |
| `germetik__novol.jpg` | germetik | NOVOL | 7 | https://avtokraska-shop.storage.yandexcloud.net/iblock/0c5/MG_6425.jpg |
| `polirol-pasta__3m.jpg` | polirol-pasta | 3M | 7 | https://cdn1.ozone.ru/s3/multimedia-j/c600/6698807407.jpg |
| `polirol-pasta__k2.jpg` | polirol-pasta | K2 | 7 | https://shop.cardetaillab.ua/upload/products/3513/661821c95cdcd0.92628819.png |
| `aromatizator.jpg` | aromatizator | * | 7 | https://ir.ozone.ru/s3/multimedia-1-b/9147485567.jpg |
| `smazka__wd-40.jpg` | smazka | WD-40 | 7 | https://berimaslo.ru/upload/iblock/af7/s6km81vwph8sx2imxlqrjp7ukhbzcnfl.jpeg |
| `filtr-respirator.jpg` | filtr-respirator | * | 7 | https://ir.ozone.ru/s3/multimedia-y/c1000/6872108830.jpg |
| `smazka__hi-gear.jpg` | smazka | HI-GEAR | 6 | https://avtozaryad.ru/upload/iblock/9de/mo80ot17cip38d3tm7w8pw0xv7oexpxq.jpg |
| `movil-antikor__agat.jpg` | movil-antikor | АГАТ | 6 | https://ir.ozone.ru/s3/multimedia-3/c1000/6122568051.jpg |
| `grunt-aerozol__jeta-pro.jpg` | grunt-aerozol | Jeta Pro | 6 | https://expertkraska.ru/wp-content/uploads/2021/01/5559.jpg |
| `shpatlevka__reoflex.jpg` | shpatlevka | REOFLEX | 6 | https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtohimiya/1441985/560x504/52177083.jpg |
| `antigraviy__oil-right.jpg` | antigraviy | OIL RIGHT | 6 | https://www.oilright.ru/content/catalog/art/6041.png |
| `germetik__russkiy-master.jpg` | germetik | Русский мастер | 6 | https://auto-emali.ru/prod/05/05258m+.jpg |
| `maslo-motornoe__avista.jpg` | maslo-motornoe | AVISTA | 6 | https://globaloil.biz/image/cache/catalog/image/catalog/image/catalog/image/catalog/image/catalog/products/avista/avista-pace-evo-c3-5w40-5l-500x500.png |
| `razbavitel__naftan.jpg` | razbavitel | НАФТАН | 6 | https://avtostil.by/upload/iblock/be0/mtxix3321v38yt3puyubacvbju8f00v7.jpg |
| `blok-shlifovalnyy.jpg` | blok-shlifovalnyy | * | 6 | https://images.prom.ua/761071199_w640_h640_mirka-gibkij-rubanok.jpg |
| `kraska-banka__colomix.jpg` | kraska-banka | COLOMIX | 5 | https://images.prom.ua/678296238_w640_h640_440-atlantik-kolomiks.jpg |
| `kraska-aerozol__maxi-color.jpg` | kraska-aerozol | MAXI COLOR | 5 | https://ir.ozone.ru/s3/multimedia-8/6542887280.jpg |
| `grunt__relo.jpg` | grunt | RELO | 5 | https://www.mipa.ru/cache/static.relo_grund.orig.jpg |
| `grunt__reoflex.jpg` | grunt | REOFLEX | 5 | https://cdn1.ozone.ru/s3/multimedia-1-p/c600/7297314469.jpg |
| `shpatlevka__mipa.jpg` | shpatlevka | MIPA | 5 | https://cdn1.ozone.ru/s3/multimedia-1-0/c600/7746282576.jpg |
| `germetik__jeta-pro.jpg` | germetik | Jeta Pro | 5 | https://auto-emali.ru/prod/16/16741-1.jpg |
| `polirol-pasta__farecla.jpg` | polirol-pasta | FARECLA | 5 | https://ir.ozone.ru/s3/multimedia-1-k/c1000/7845337316.jpg |
| `polirol-pasta__mipa.jpg` | polirol-pasta | MIPA | 5 | https://malyarka.by/wp-content/uploads/2025/11/54063m.jpg |
| `maslo-motornoe__champion.jpg` | maslo-motornoe | CHAMPION | 5 | https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtomobilnye-masla-i-smazki/4837705/560x504/64330111.jpg |
| `ochistitel__koto.jpg` | ochistitel | KOTO | 5 | https://ir.ozone.ru/s3/multimedia-1-c/c1000/7740353496.jpg |
| `kraska-banka__reoflex.jpg` | kraska-banka | REOFLEX | 4 | https://ir.ozone.ru/s3/multimedia-1-x/7294079733.jpg |
| `smazka__agat.jpg` | smazka | АГАТ | 4 | https://ir.ozone.ru/s3/multimedia-1-e/c1000/7039770710.jpg |
| `grunt-aerozol__effect.jpg` | grunt-aerozol | EFFECT | 4 | https://ir.ozone.ru/s3/multimedia-s/c1000/6888573820.jpg |
| `grunt__ranal.jpg` | grunt | RANAL | 4 | https://resources.cdn-kaspi.kz/img/m/p/h64/h7c/67164809297950.jpg?format=gallery-large |
| `grunt__vika.jpg` | grunt | VIKA | 4 | https://ir.ozone.ru/s3/multimedia-1-7/8357012359.jpg |
| `lak__baslac.jpg` | lak | BASLAC | 4 | https://expertkraska.ru/wp-content/uploads/2020/04/b-40-440_2_1.jpg |
| `germetik__mipa.jpg` | germetik | MIPA | 4 | https://ir.ozone.ru/s3/multimedia-1-i/c1000/7803883926.jpg |
| `otverditel__baslac.jpg` | otverditel | BASLAC | 4 | https://e-trading.by/upload/iblock/5af/qpofjoud8mviksefiyd2y000vm7iyzca.jpg |
| `dobavka-lkm__novol.jpg` | dobavka-lkm | NOVOL | 4 | https://kraska-kiev.com.ua/content/images/24/900x900l80mc0/novol-plus-720-smola-dlja-laminirovanija-1kg-83874505350884.jpg |
| `perchatki.jpg` | perchatki | * | 4 | https://www.deloks.ru/upload/iblock/6b0/uo4tdbsesezn0suchrsrs4jhqzqnrj5r/perchatki_nitrilovye_50_par_100_sht_neopudrennye_razmer_m_sredniy_kartonnaya_korobka_layma_1_full.jpg |
| `respirator.jpg` | respirator | * | 4 | https://ir.ozone.ru/s3/multimedia-1/c1000/6303547609.jpg |
| `kraska-banka__holex.jpg` | kraska-banka | HOLEX | 3 | https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtohimiya/14671787/1000x1000/170368967.jpg |
| `kraska-aerozol__jeta-pro.jpg` | kraska-aerozol | Jeta Pro | 3 | https://kraski-auto.ru/wp-content/uploads/2021/02/k8t6o71n4i880sk8ks8cs0s0sc8kgo.jpg |
| `pokrytie-zaschitnoe__mipa.jpg` | pokrytie-zaschitnoe | MIPA | 3 | https://federation.msk.ru/wp-content/uploads/2023/11/mipa-protector-b.png |
| `kraska-aerozol__novol.jpg` | kraska-aerozol | NOVOL | 3 | https://avto-kraska.by/product-image/944/1759377856-1759351796-novolclearcoat.jpg |
| `grunt-aerozol__vika.jpg` | grunt-aerozol | VIKA | 3 | https://ir.ozone.ru/s3/multimedia-1-k/7975476848.jpg |
| `lak__reoflex.jpg` | lak | REOFLEX | 3 | https://ir.ozone.ru/s3/multimedia-f/c1000/6248261811.jpg |
| `otverditel__reoflex.jpg` | otverditel | REOFLEX | 3 | https://cdn.vseinstrumenti.ru/images/goods/stroitelnye-materialy/otdelochnye-materialy/1592845/1000x1000/52801230.jpg |
| `shpatlevka__troton.jpg` | shpatlevka | TROTON | 3 | https://cdn1.ozone.ru/s3/multimedia-z/c600/6392888627.jpg |
| `kraska-aerozol__abro.jpg` | kraska-aerozol | ABRO | 3 | https://img.hyperauto.ru/images/kh/13/3/0_ha_product_card_large.jpg?v=95092002 |
| `antigraviy__effect.jpg` | antigraviy | EFFECT | 3 | https://ir.ozone.ru/s3/multimedia-1-q/c1000/7236284570.jpg |
| `antigraviy__relo.jpg` | antigraviy | RELO | 3 | https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtohimiya/14881306/560x504/171606856.jpg |
| `antigraviy__vika.jpg` | antigraviy | VIKA | 3 | https://vika-color.ru/storage/product/1/7wPcf8Yll7r1eEAYQb__xwHOVR-mulvC.jpg |
| `antigraviy__agat.jpg` | antigraviy | АГАТ | 3 | https://cdn1.ozone.ru/s3/multimedia-e/6100936130.jpg |
| `ochistitel__atas.jpg` | ochistitel | ATAS | 3 | https://cdn1.ozone.ru/s3/multimedia-1-s/c600/7011135604.jpg |
| `linza-maski.jpg` | linza-maski | * | 3 | https://cdn1.ozone.ru/s3/multimedia-g/c600/6364850512.jpg |
| `ochistitel__mannol.jpg` | ochistitel | MANNOL | 3 | https://supraten.md/image/catalog/products/0410334.png |
| `movil-antikor__mipa.jpg` | movil-antikor | MIPA | 3 | https://ir.ozone.ru/s3/multimedia-1-2/c600/7989511394.jpg |
| `smazka__presto.jpg` | smazka | PRESTO | 3 | https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtomobilnye-masla-i-smazki/1801902/1000x1000/53449847.jpg |
| `razbavitel__relo.jpg` | razbavitel | RELO | 3 | https://autofix.by/upload/iblock/a79/1tiav64bzvn4q9jm5rtnutpvt584ohpd.jpeg |
| `razbavitel__agat.jpg` | razbavitel | АГАТ | 3 | https://ir.ozone.ru/s3/multimedia-q/c1000/6422818370.jpg |
| `kraska-banka__russkiy-master.jpg` | kraska-banka | Русский мастер | 3 | https://avtoemali96.ru/wa-data/public/shop/products/68/79/17968/images/14913/14913.750x0.jpg |

## Фото с сайта поставщика (основной источник)

`src/data/supplierPhotos.js` — карта «Бренд|Артикул» → имя файла в галерее
поставщика. Полный адрес собирается в `src/lib/productImage.js`, картинка
грузится прямой ссылкой с сервера поставщика, у нас не хранится.

Откуда: в клиентском прайсе столбец S «Фото и описание» — это формула
`=ЕСЛИ(A>0; ГИПЕРССЫЛКА(A; "Фото и описание"))`, то есть адрес лежит в
столбце A и ведёт на HTML-страницу товара у дистрибьютора, а не на файл
картинки. Адрес самой картинки достаётся со страницы, из блока
`b-goods-gallery`.

Два шага, оба воспроизводимые:

```
python3 scripts/extract-price-links.py     # прайс .xls -> ссылки на карточки
node scripts/fetch-supplier-photo-urls.mjs # карточки -> адреса картинок
```

Второй шаг кэширует ответы в `scripts/.cache/photo-urls.json` (в git не идёт),
поэтому повторный запуск дёргает только новые страницы; полный перечит — `--force`.

Числа последнего прогона: 2833 ссылки в прайсе, 2760 уникальных адресов,
обойдено всё, фото нашлось на 2483 страницах, 29 страниц отдали 404
(товар снят с продажи). С каталогом сошлось 2648 товаров, из них с фото — 2394.

Берём вариант `galleries-product_slider`: он всегда ровно 430×520. Вариант
`galleries-popup` у разных товаров от 128 до 985 пикселей и для мелких
оригиналов оказывается меньше слайдерного.

Что важно помнить:

- на части снимков внизу вотермарка дистрибьютора «УСКОРЕНИЕ» — при прямых
  ссылках убрать её нельзя;
- картинки живут на чужом сервере: поставщик может переименовать файл или
  закрыть хотлинк, и они пропадут разом. Защиты от хотлинка сейчас нет,
  проверено — отдаётся без Referer и с чужим Referer, кэш 7 суток;
- у фильтров KNECHT-MAHLE на карточках общая групповая фотография, а не
  конкретный артикул.

## Фото конкретных артикулов

`public/products/sku/` + карта `src/data/skuPhotos.js` (ключ `Бренд|Артикул`).
Самый приоритетный источник: снимок именно этого товара, лежит у нас.
Отдаётся и в карточке каталога, и на странице товара.

Сейчас там 33 изображения, покрывают 45 из 48 позиций Menzerna. Источник —
картинки, встроенные в `Menzerna 19.01.2026.xlsx` (прайс поставщика): в xlsx
они привязаны якорями к строкам, варианты объёма наследуют картинку своей
группы. Импорт — `scripts/import-xlsx-photos.py`: перечитывает прайсы из
`SOURCES`, перекладывает файлы и перегенерирует карту. Прогонять заново после
каждого обновления прайса; список прайсов правится в самом скрипте.

Остальные исходные прайсы встроенных фото не содержат — только логотип
поставщика на титуле:

| Файл | Строк | Встроенных фото |
| --- | ---: | --- |
| `прайс_клиента_Шикарная_И_В_ИП...04_06_2026.xls` | 2833 | нет |
| `Walmec 19.01.2026.xls` | — | 1 (логотип) |
| `JETA PRO 18 03 26 оборудование.xls` | — | 1 (логотип) |
| `JETA PRO ЛКМ 04.05.26.xls` | — | 1 (логотип) |
| `JETA PRO расходка 13.05.2026.xlsx` | — | 1 (логотип) |
| `Menzerna 19.01.2026.xlsx` | 56 | 35 (34 товарных) |

В клиентском прайсе в колонке A у каждой из 2833 строк лежит ссылка на карточку
товара у дистрибьютора (ускорение.бел). Это не фото, но со страницы фото
достаётся: по выборке из 30 карточек снимок есть у 27. Соединение по
`бренд + артикул` покрывает 2648 наших позиций. Не используется по решению
заказчика: переносим только то, что лежит в самих прайсах, а на тех снимках
почти всегда вотермарка дистрибьютора.

## Общая библиотека типов
