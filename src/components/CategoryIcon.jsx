import React from 'react'

// Simple, distinct line-icon per category. Used as a visual stand-in
// for a product photo (the supplied price lists contain no images).
const PATHS = {
  paint: (
    <>
      <path d="M20 34h24l-3 20a3 3 0 0 1-3 3H26a3 3 0 0 1-3-3l-3-20Z" />
      <path d="M24 34V22a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12" />
      <path d="M30 12h4v6h-4z" />
      <path d="M22 46h20" strokeDasharray="2 4" />
    </>
  ),
  primer: (
    <>
      <rect x="18" y="20" width="28" height="34" rx="3" />
      <path d="M26 20v-6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6" />
      <path d="M18 32h28" />
      <path d="M24 40h16" />
    </>
  ),
  varnish: (
    <>
      <path d="M32 10c6 8 12 16 12 24a12 12 0 1 1-24 0c0-8 6-16 12-24Z" />
      <path d="M26 40a6 6 0 0 0 12 0" />
    </>
  ),
  putty: (
    <>
      <rect x="14" y="26" width="36" height="20" rx="4" />
      <path d="M20 26v-4h24v4" />
      <path d="M22 36h8M34 36h8" />
    </>
  ),
  glue: (
    <>
      <path d="M24 12h16v10l4 4v20a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V26l4-4Z" />
      <path d="M28 12v-4h8v4" />
      <path d="M24 32h16" />
    </>
  ),
  polish: (
    <>
      <circle cx="32" cy="30" r="14" />
      <circle cx="32" cy="30" r="5" />
      <path d="M32 46v8M20 30h-6M44 30h6" />
    </>
  ),
  consumables: (
    <>
      <circle cx="32" cy="32" r="16" />
      <circle cx="32" cy="32" r="5" />
      <path d="M32 16v6M32 42v6M16 32h6M42 32h6" />
    </>
  ),
  tools: (
    <>
      <path d="M22 22a8 8 0 0 1 11 11L48 48l-6 6-15-15A8 8 0 0 1 22 22Z" />
      <path d="M18 46l6-6" />
    </>
  ),
}

const LABELS = {
  paint: 'Краска',
  primer: 'Грунт',
  varnish: 'Лак',
  putty: 'Шпатлевка',
  glue: 'Клей / герметик',
  polish: 'Полироль',
  consumables: 'Расходники',
  tools: 'Оборудование',
}

export default function CategoryIcon({ icon = 'paint', size = 56, className = '' }) {
  const path = PATHS[icon] || PATHS.paint
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={LABELS[icon] || 'товар'}
    >
      {path}
    </svg>
  )
}
