import React from 'react'
import { Link } from 'react-router-dom'
import CategoryIcon from './CategoryIcon.jsx'
import './CategoryCard.css'

export default function CategoryCard({ category }) {
  return (
    <Link to={`/catalog?category=${category.slug}`} className="category-card">
      <div className="category-card__icon">
        <CategoryIcon icon={category.icon} size={30} />
      </div>
      <div>
        <h3 className="category-card__name">{category.name}</h3>
        <p className="category-card__desc">{category.description}</p>
      </div>
    </Link>
  )
}
