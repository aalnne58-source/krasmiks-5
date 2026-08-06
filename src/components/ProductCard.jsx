import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export const formatPrice = (price) => {
  if (price === undefined || price === null) return '0';
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default function ProductCard({ product }) {
  const productPath = product.slug ? `/product/${product.slug}` : `/product/${product.id}`;

  // Код берёт строго картинку фрилансера на основе id товара (1.jpg, 2.jpg)
  const uniqueLocalPhoto = `/products/${product.id}.jpg`; 

  return (
    <article className="catalog_item">
      <div className="product-card__badge-container">
        {product.discount && (
          <span className="product-card__badge product-card__badge--discount">-{product.discount}%</span>
        )}
        {product.isNew && (
          <span className="product-card__badge product-card__badge--new">Новинка</span>
        )}
      </div>

      <Link to={productPath} className="catalog_item-img-link" style={{ display: 'block', textAlign: 'center', background: '#fff', padding: '10px' }}>
        <img
          src={uniqueLocalPhoto}
          alt={product.name}
          className="catalog_item-img"
          style={{ width: '100%', height: '180px', objectFit: 'contain' }}
          loading="lazy"
        />
      </Link>

      <div className="catalog_item-desc">
        <div className="catalog_item-brand" style={{ color: '#ff6b00', fontWeight: 'bold' }}>{product.brand}</div>
        <Link to={productPath} className="catalog_item-title-link">
          <h3 className="catalog_item-title">{product.name}</h3>
        </Link>
        
        <div className="catalog_item-footer">
          <div className="catalog_item-price-block">
            {product.oldPrice && <span className="catalog_item-old-price">{formatPrice(product.oldPrice)} ₽</span>}
            <span className="catalog_item-price">{formatPrice(product.price)} ₽</span>
          </div>
          <Link to={productPath} className="catalog_item-cart-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <span>🛒</span> Купить
          </Link>
        </div>
      </div>
    </article>
  )
}
