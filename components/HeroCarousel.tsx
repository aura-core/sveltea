'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowIcon } from './ui'

const HERO_SLIDES = [
  {
    bg: 'slide-bg-1',
    tag: 'Hidroxiapatita de origen natural',
    caption: 'Andamio biológico de < 45 μm',
    num: '01 / 04',
  },
  {
    bg: 'slide-bg-2',
    tag: 'Bioinducción in vivo',
    caption: 'Colágeno tipo I y III, formado por tu propio cuerpo',
    num: '02 / 04',
  },
  {
    bg: 'slide-bg-3',
    tag: 'Manejo integral de la celulitis',
    caption: 'Bioestimulación + subcisión en una misma sesión',
    num: '03 / 04',
  },
  {
    bg: 'slide-bg-4',
    tag: 'Resultado clínico',
    caption: '12 a 18 meses de persistencia documentada',
    num: '04 / 04',
  },
]

const INTERVAL = 5000

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((idx: number) => {
    setActive(((idx % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(next, INTERVAL)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [active, paused, next])

  return (
    <div
      className="hero__carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`carousel__slide ${i === active ? 'carousel__slide--active' : 'carousel__slide--inactive'}`}
        >
          <div className={`carousel__bg ${slide.bg}`} />
          <div className="carousel__dots-pattern" />
          <div className="carousel__grain" />
          <div className="carousel__overlay">
            <div className="carousel__top-bar">
              <span className="carousel__brand-label">SVELTEA · 0N</span>
              <div className="carousel__top-right">
                <div className="carousel__pulse-dot" />
                <span className="carousel__accent-tag">Active</span>
              </div>
            </div>

            <div className="carousel__bottom">
              <p className="carousel__caption">{slide.caption}</p>
              <div className="carousel__bottom-meta">
                <span className="carousel__tag">{slide.tag}</span>
                <span className="carousel__num">{slide.num}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        className="carousel__arrow carousel__arrow--prev"
        onClick={prev}
        aria-label="Diapositiva anterior"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M13 7H1M1 7L6.5 1.5M1 7L6.5 12.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className="carousel__arrow carousel__arrow--next"
        onClick={next}
        aria-label="Siguiente diapositiva"
      >
        <ArrowIcon size={14} />
      </button>

      <div className="carousel__controls">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${i === active ? ' carousel__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a diapositiva ${i + 1}`}
          >
            <div key={`${i}-${active}`} className="carousel__dot-fill" />
          </button>
        ))}
      </div>
    </div>
  )
}
