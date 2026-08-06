import React from 'react'
import './Filters.css'

export default function Filters({
  categories,
  activeCategory,
  onCategoryChange,
  priceMin,
  priceMax,
  priceBounds,
  onPriceChange,
  brand,
  brands,
  onBrandChange,
  onReset,
}) {
  return (
    <aside className="filters">
      <div className="filters__block">
        <h4>Категория</h4>
        <ul>
          <li>
            <button
              className={!activeCategory ? 'is-active' : ''}
              onClick={() => onCategoryChange(null)}
            >
              Все товары
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <button
                className={activeCategory === c.slug ? 'is-active' : ''}
                onClick={() => onCategoryChange(c.slug)}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filters__block">
        <h4>Цена, ₽</h4>
        <div className="filters__price-row">
          <input
            type="number"
            min={priceBounds.min}
            max={priceMax}
            value={priceMin}
            onChange={(e) => onPriceChange(Number(e.target.value), priceMax)}
          />
          <span>—</span>
          <input
            type="number"
            min={priceMin}
            max={priceBounds.max}
            value={priceMax}
            onChange={(e) => onPriceChange(priceMin, Number(e.target.value))}
          />
        </div>
        <input
          type="range"
          min={priceBounds.min}
          max={priceBounds.max}
          value={priceMax}
          onChange={(e) => onPriceChange(priceMin, Number(e.target.value))}
          className="filters__slider"
        />
      </div>

      <div className="filters__block">
        <h4>Бренд</h4>
        <select value={brand} onChange={(e) => onBrandChange(e.target.value)}>
          <option value="">Все бренды</option>
          {brands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <button className="btn btn-secondary filters__reset" onClick={onReset}>
        Сбросить фильтры
      </button>
    </aside>
  )
}
