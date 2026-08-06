import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <div className="site-footer__logo">
            Краска<span className="accent">Микс</span>
          </div>
          <p className="site-footer__text">
            Лакокрасочные материалы, расходники и оборудование для кузовного ремонта и покраски.
            Работаем с частными мастерами и автосервисами.
          </p>
        </div>

        <div>
          <h4>Каталог</h4>
          <ul>
            <li><Link to="/catalog?category=krasi-emali">Краски и эмали</Link></li>
            <li><Link to="/catalog?category=gruntovki">Грунтовки</Link></li>
            <li><Link to="/catalog?category=laki">Лаки</Link></li>
            <li><Link to="/catalog?category=oborudovanie">Оборудование</Link></li>
          </ul>
        </div>

        <div>
          <h4>Информация</h4>
          <ul>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/cart">Корзина</Link></li>
          </ul>
        </div>

        <div>
          <h4>Контакты</h4>
          <ul>
            <li><a href="tel:+79586016330">+7 958 601-63-30</a></li>
            <li>
              <a href="https://www.avito.ru/brands/i156560620" target="_blank" rel="noopener noreferrer">
                Наш магазин на Авито
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <span>© {new Date().getFullYear()} КраскаМикс. Цены ориентировочные, уточняйте наличие по телефону.</span>
      </div>
    </footer>
  )
}
