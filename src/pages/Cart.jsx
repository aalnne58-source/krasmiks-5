import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import CategoryIcon from '../components/CategoryIcon.jsx'
import { formatPrice } from '../components/ProductCard.jsx'
import './Cart.css'

export default function Cart() {
  const { items, removeItem, setQty, clearCart, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="container cart-page cart-page--empty">
        <h1>Корзина пуста</h1>
        <p>Добавьте товары из каталога, чтобы оформить заказ.</p>
        <Link to="/catalog" className="btn btn-primary">Перейти в каталог</Link>
      </div>
    )
  }

  return (
    <div className="container cart-page">
      <h1>Корзина</h1>

      <div className="cart-page__layout">
        <ul className="cart-list">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item__media">
                <CategoryIcon icon={item.icon} size={32} />
              </div>
              <div className="cart-item__info">
                <span className="cart-item__brand">{item.brand}</span>
                <span className="cart-item__name">{item.name}</span>
                {item.volume && <span className="cart-item__volume">{item.volume}</span>}
              </div>
              <div className="qty-control">
                <button onClick={() => setQty(item.id, item.qty - 1)} aria-label="Уменьшить количество">−</button>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => setQty(item.id, Math.max(1, Number(e.target.value) || 1))}
                />
                <button onClick={() => setQty(item.id, item.qty + 1)} aria-label="Увеличить количество">+</button>
              </div>
              <span className="cart-item__price">{formatPrice(item.price * item.qty)}</span>
              <button className="cart-item__remove" onClick={() => removeItem(item.id)} aria-label="Удалить товар">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="cart-summary">
          <h3>Ваш заказ</h3>
          <div className="cart-summary__row">
            <span>Товаров</span>
            <span>{items.reduce((s, i) => s + i.qty, 0)}</span>
          </div>
          <div className="cart-summary__row cart-summary__row--total">
            <span>Итого</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <a href="tel:+79586016330" className="btn btn-primary cart-summary__cta">
            Оформить по телефону
          </a>
          <button className="btn btn-ghost cart-summary__clear" onClick={clearCart}>
            Очистить корзину
          </button>
          <p className="cart-summary__note">
            Оплата и доставка обсуждаются при звонке. Наличие уточняйте — часть позиций отгружается под заказ.
          </p>
        </div>
      </div>
    </div>
  )
}
