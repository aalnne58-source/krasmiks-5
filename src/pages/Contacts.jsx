import React from 'react'
import './Contacts.css'

export default function Contacts() {
  return (
    <div className="container contacts-page">
      <h1>Контакты</h1>

      <div className="contacts-page__grid">
        <div className="contacts-card">
          <h3>Телефон</h3>
          <a href="tel:+79586016330" className="contacts-card__value">+7 958 601-63-30</a>
          <p>Звоните для уточнения наличия, цен и сроков поставки.</p>
        </div>

        <div className="contacts-card">
          <h3>Магазин на Авито</h3>
          <a
            href="https://www.avito.ru/brands/i156560620"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts-card__value contacts-card__value--link"
          >
            avito.ru/brands/i156560620
          </a>
          <p>Смотрите актуальные объявления и отзывы покупателей.</p>
        </div>

        <div className="contacts-card">
          <h3>Город</h3>
          <p className="contacts-card__value">Санкт-Петербург</p>
          <p>Работаем с доставкой по городу и области, отгрузка под заказ по РФ.</p>
        </div>
      </div>

      <section className="about-block">
        <h2>О компании</h2>
        <p>
          КраскаМикс поставляет лакокрасочные материалы, расходники и оборудование для
          кузовного ремонта: автоэмали MIPA, ремонтные ЛКМ и оборудование JETA PRO,
          краскопульты Walmec, полировальные составы Menzerna и абразивы 3M. Работаем как
          с частными мастерами, так и с автосервисами — помогаем подобрать материалы под
          конкретную задачу и считаем расход перед заказом.
        </p>
      </section>
    </div>
  )
}
