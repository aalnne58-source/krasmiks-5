import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import './ProductCard.css'

const IMAGE_COUNT = 82;
const IMAGE_STRIDE = 31;

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

let imageByProductId = null;

function getImageNum(product) {
  if (!imageByProductId) {
    imageByProductId = new Map();
    const seenInGroup = new Map();
    for (const p of products) {
      const groupKey = `${p.categorySlug}|${p.brand}`;
      const position = seenInGroup.get(groupKey) || 0;
      seenInGroup.set(groupKey, position + 1);
      const start = hashString(groupKey) % IMAGE_COUNT;
      imageByProductId.set(p.id, ((start + position * IMAGE_STRIDE) % IMAGE_COUNT) + 1);
    }
  }
  return imageByProductId.get(product.id) || 1;
}

export const formatPrice = (price) => {
  if (price === undefined || price === null) return '0';
  const cleanPrice = price.toString().replace(/[^0-9.]/g, '');
  return Number(cleanPrice).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default function ProductCard({ product }) {
  const productPath = product.slug ? `/product/${product.slug}` : `/product/${product.id || product.Артикул}`;

  const name = product.Наименование || product.name || '';
  const brand = product.Бренд || product.brand || 'Автохимия';
  const rawPrice = product['Цена с НДС'] || product.price || 0;

  const finalPhoto = `/products/${getImageNum(product)}.jpg`;

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
