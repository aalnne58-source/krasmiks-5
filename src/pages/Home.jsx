import React from 'react'
import { Link } from 'react-router-dom'
import { categories, products } from '../data/products.js'
import CategoryCard from '../components/CategoryCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import './Home.css'

export default function Home() {
  const bestsellers = products.slice(0, 8)

  return (
    <>
      <section className="hero">
        <div className="container hero__row">
          <div className="hero__text">
            <span className="hero__eyebrow">Оптовые прайсы напрямую от поставщиков</span>
            <h1>
              Всё для покраски<br /> и кузовного ремонта
            </h1>
            <p>
              Краски, эмали, грунтовки, лаки, шпатлевки, расходники и профессиональное
              оборудование JETA PRO, MIPA, Walmec и Menzerna — в одном каталоге.
            </p>
            <div className="hero__actions">
              <Link to="/catalog" className="btn btn-primary">Перейти в каталог</Link>
              <a href="tel:+79586016330" className="btn btn-secondary">Заказать по телефону</a>
            </div>
          </div>
          <div className="hero__badge">
            <span className="hero__badge-title">−15%</span>
            <span className="hero__badge-text">на первый заказ по коду MIX15</span>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2>Категории</h2>
        </div>
        <div className="home-categories">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2>Популярные товары</h2>
          <Link to="/catalog" className="section__link">Весь каталог →</Link>
        </div>
        <div className="product-grid">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="container section about">
        <div className="about__card">
          <h2>О нас</h2>
          <p>
            КраскаМикс — поставщик лакокрасочных материалов и оборудования для авторемонтных
            мастерских и частных клиентов в Санкт-Петербурге. Работаем с брендами JETA PRO,
            MIPA, Walmec, Menzerna и 3M. Помогаем подобрать материалы под задачу и считаем
            расход перед заказом.
          </p>
          <a href="https://www.avito.ru/brands/i156560620" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Наш магазин на Авито
          </a>
        </div>
      </section>
    </>
  )
}
