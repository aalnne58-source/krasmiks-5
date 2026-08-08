import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export const formatPrice = (price) => {
  if (price === undefined || price === null) return '0';
  const cleanPrice = price.toString().replace(/[^0-9.]/g, '');
  return Number(cleanPrice).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default function ProductCard({ product }) {
  const productPath = product.slug ? `/product/${product.slug}` : `/product/${product.id || product.Артикул}`;

  // Считываем новые названия колонок из прайс-листа клиента
  const name = product.Наименование || product.name || '';
  const brand = product.Бренд || product.brand || 'Автохимия';
  const rawPrice = product['Цена с НДС'] || product.price || 0;

  const upperName = name.toUpperCase();
  const upperBrand = brand.toUpperCase();

  // Автоматическое распределение 82 картинок от фрилансера по ключевым словам
  let imageNum = 1;

  if (upperBrand.includes('NOVOL')) {
    imageNum = (Math.abs(name.length) % 15) + 1; // 1-15 для Novol
  } else if (upperBrand.includes('MIPA') && upperName.includes('ЛАК')) {
    imageNum = (Math.abs(name.length) % 10) + 16; // 16-25 для лаков Mipa
  } else if (upperName.includes('ГРУНТ') || upperName.includes('PRIMER')) {
    imageNum = (Math.abs(name.length) % 10) + 26; // 26-35 для грунтов
  } else if (upperBrand.includes('SIA') || upperName.includes('КРУГ')) {
    imageNum = (Math.abs(name.length) % 15) + 40; // 40-55 для SIA
  } else if (upperName.includes('КЛЕЙ') || upperName.includes('ГЕРМЕТИК')) {
    imageNum = (Math.abs(name.length) % 8) + 60;  // 60-68 для клеев
  } else {
    imageNum = (Math.abs(name.length) % 14) + 69; // Остальное равномерно
  }

  const finalPhoto = `/products/${imageNum}.jpg`;

  return (
    <article className="catalog_item">
      <div className="product-card__badge-container">
        {product.isNew && <span className="product-card__badge product-card__badge--new">Новинка</span>}
      </div>

      <Link to={productPath} className="catalog_item-img-link" style={{ display: 'block', textAlign: 'center', background: '#fff', padding: '10px' }}>
        <img
          src={finalPhoto}
          alt={name}
          className="catalog_item-img"
          style={{ width: '100%', height: '180px', objectFit: 'contain' }}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/products/1.jpg";
          }}
        />
      </Link>

      <div className="catalog_item-desc">
        <div className="catalog_item-brand" style={{ color: '#ff6b00', fontWeight: 'bold' }}>{brand}</div>
        <Link to={productPath} className="catalog_item-title-link">
          <h3 className="catalog_item-title">{name}</h3>
        </Link>
        
        <div className="catalog_item-footer">
          <div className="catalog_item-price-block">
            <span className="catalog_item-price">{formatPrice(rawPrice)} ₽</span>
          </div>
          <Link to={productPath} className="catalog_item-cart-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            🛒 Купить
          </Link>
        </div>
      </div>
    </article>
  )
}
