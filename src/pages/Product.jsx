import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products.js'
import CategoryIcon from '../components/CategoryIcon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../components/ProductCard.jsx'
import './Product.css'

export default function Product() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="container product-page">
        <p>Товар не найден.</p>
        <Link to="/catalog" className="btn btn-primary">Вернуться в каталог</Link>
      </div>
    )
  }

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4)

  function handleAdd() {
    addItem(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="container product-page">
      <nav className="product-page__crumbs">
        <Link to="/">Главная</Link> /{' '}
        <Link to={`/catalog?category=${product.categorySlug}`}>{product.category}</Link> / {product.name}
      </nav>

      <div className="product-page__layout">
        <div className="product-page__media">
          <CategoryIcon icon={product.icon} size={96} />
        </div>

        <div className="product-page__info">
          <span className="product-page__brand">{product.brand}</span>
          <h1>{product.name}</h1>
          {product.volume && <p className="product-page__volume">Объём / фасовка: {product.volume}</p>}
          {product.sku && <p className="product-page__sku">Артикул: {product.sku}</p>}

          <p className="product-page__price">{formatPrice(product.price)}</p>

          <div className="product-page__buy">
            <div className="qty-control">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Уменьшить количество">−</button>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
              />
              <button onClick={() => setQty((q) => q + 1)} aria-label="Увеличить количество">+</button>
            </div>
            <button className="btn btn-primary product-page__add" onClick={handleAdd}>
              {added ? 'Добавлено ✓' : 'Добавить в корзину'}
            </button>
          </div>

          <div className="product-page__description">
            <h3>Описание</h3>
            <p>
              {product.name} — товар категории «{product.category}» от бренда {product.brand}.
              Поставляется в фасовке {product.volume || 'по запросу'}. Подходит для профессионального
              использования в кузовном ремонте и покраске. Для подбора аналогов и уточнения наличия
              звоните по телефону +7 958 601-63-30.
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="product-page__related">
          <h2>Похожие товары</h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
