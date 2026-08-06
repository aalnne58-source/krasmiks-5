import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import './Header.css'

export default function Header() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { totalCount } = useCart()

  function handleSearch(e) {
    e.preventDefault()
    navigate(query.trim() ? `/catalog?q=${encodeURIComponent(query.trim())}` : '/catalog')
  }

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Link to="/" className="site-header__logo">
          <span className="site-header__logo-mark">КМ</span>
          <span className="site-header__logo-text">
            Краска<span className="accent">Микс</span>
          </span>
        </Link>

        <form className="site-header__search" onSubmit={handleSearch} role="search">
          <input
            type="search"
            placeholder="Найти товар: краска, грунт, лак…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Поиск по товарам"
          />
          <button type="submit" className="site-header__search-btn" aria-label="Искать">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>
        </form>

        <div className="site-header__actions">
          <a href="tel:+79586016330" className="site-header__phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
            </svg>
            <span>+7 958 601-63-30</span>
          </a>

          <Link to="/cart" className="site-header__cart" aria-label="Корзина">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
            {totalCount > 0 && <span className="site-header__cart-badge">{totalCount}</span>}
          </Link>
        </div>
      </div>

      <nav className="site-header__nav">
        <div className="container site-header__nav-row">
          <Link to="/catalog">Каталог</Link>
          <Link to="/catalog?category=krasi-emali">Краски и эмали</Link>
          <Link to="/catalog?category=gruntovki">Грунтовки</Link>
          <Link to="/catalog?category=laki">Лаки</Link>
          <Link to="/catalog?category=oborudovanie">Оборудование</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
      </nav>
    </header>
  )
}
