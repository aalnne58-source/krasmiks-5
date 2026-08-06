import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { categories, products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import Filters from '../components/Filters.jsx'
import './Catalog.css'

const PRICE_BOUNDS = {
  min: Math.min(...products.map((p) => p.price)),
  max: Math.max(...products.map((p) => p.price)),
}

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || null
  const initialQuery = searchParams.get('q') || ''

  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [query, setQuery] = useState(initialQuery)
  const [priceMin, setPriceMin] = useState(PRICE_BOUNDS.min)
  const [priceMax, setPriceMax] = useState(PRICE_BOUNDS.max)
  const [brand, setBrand] = useState('')
  const [sort, setSort] = useState('relevance')

  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand))].sort(),
    []
  )

  function handleCategoryChange(slug) {
    setActiveCategory(slug)
    const next = new URLSearchParams(searchParams)
    if (slug) next.set('category', slug)
    else next.delete('category')
    setSearchParams(next)
  }

  function handlePriceChange(min, max) {
    setPriceMin(min)
    setPriceMax(max)
  }

  function resetFilters() {
    setActiveCategory(null)
    setQuery('')
    setPriceMin(PRICE_BOUNDS.min)
    setPriceMax(PRICE_BOUNDS.max)
    setBrand('')
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.price >= priceMin && p.price <= priceMax)
    if (activeCategory) list = list.filter((p) => p.categorySlug === activeCategory)
    if (brand) list = list.filter((p) => p.brand === brand)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      )
    }
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'ru'))
    return list
  }, [activeCategory, query, priceMin, priceMax, brand, sort])

  const activeCategoryName = categories.find((c) => c.slug === activeCategory)?.name

  return (
    <div className="container catalog">
      <div className="catalog__head">
        <h1>{activeCategoryName || 'Каталог товаров'}</h1>
        <p>{filtered.length} товаров</p>
      </div>

      <div className="catalog__toolbar">
        <input
          type="search"
          className="catalog__search"
          placeholder="Поиск по названию или бренду…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="catalog__sort">
          <option value="relevance">По умолчанию</option>
          <option value="price-asc">Сначала дешевле</option>
          <option value="price-desc">Сначала дороже</option>
          <option value="name">По названию</option>
        </select>
      </div>

      <div className="catalog__layout">
        <Filters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          priceMin={priceMin}
          priceMax={priceMax}
          priceBounds={PRICE_BOUNDS}
          onPriceChange={handlePriceChange}
          brand={brand}
          brands={brands}
          onBrandChange={setBrand}
          onReset={resetFilters}
        />

        <div className="catalog__results">
          {filtered.length === 0 ? (
            <div className="catalog__empty">
              <p>По заданным фильтрам ничего не найдено.</p>
              <button className="btn btn-secondary" onClick={resetFilters}>Сбросить фильтры</button>
            </div>
          ) : (
            <div className="product-grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
