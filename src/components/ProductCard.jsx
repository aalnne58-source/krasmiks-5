import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CategoryIcon from './CategoryIcon.jsx'
import { productImage } from '../lib/productImage.js'
import './ProductCard.css'

// Заглушка вместо фото: иконка категории и бренд. Показывается, когда для
// товара нет достоверной картинки или файл не загрузился.
function ImagePlaceholder({ icon, brand }) {
  return (
    <span className="catalog_item-placeholder">
      <CategoryIcon icon={icon || 'paint'} size={48} />
      <span className="catalog_item-placeholder-brand">{brand}</span>
    </span>
  )
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

  const [photoFailed, setPhotoFailed] = useState(false);
  const photo = productImage(product);

  return (
    <article className="catalog_item">
      <div className="product-card__badge-container">
        {product.isNew && <span className="product-card__badge product-card__badge--new">Новинка</span>}
      </div>

      <Link to={productPath} className="catalog_item-img-link">
        {photo && !photoFailed ? (
          <img
            src={photo}
            alt={name}
            className="catalog_item-img"
            loading="lazy"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <ImagePlaceholder icon={product.icon} brand={brand} />
        )}
      </Link>

      <div className="catalog_item-desc">
        <div className="catalog_item-brand">{brand}</div>
        <Link to={productPath} className="catalog_item-title-link">
          <h3 className="catalog_item-title">{name}</h3>
        </Link>
        
        <div className="catalog_item-footer">
          <div className="catalog_item-price-block">
            <span className="catalog_item-price">{formatPrice(rawPrice)} ₽</span>
          </div>
          <Link to={productPath} className="catalog_item-cart-btn">
            🛒 Купить
          </Link>
        </div>
      </div>
    </article>
  )
}
