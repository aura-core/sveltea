'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Qué es', href: '#que-es' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Aplicaciones', href: '#aplicaciones' },
  { label: 'Evidencia', href: '#evidencia' },
  { label: 'Profesionales', href: '#profesionales' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <header
        className="nav"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.96)'
            : 'rgba(255,255,255,0.92)',
          boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.07)' : 'none',
        }}
      >
        <a href="#" className="nav__logo" aria-label="Sveltea — inicio">
          <Image
            src="/sveltea-logo.png"
            alt="Sveltea"
            height={36}
            width={120}
            style={{ height: '36px', width: 'auto' }}
            priority
          />
        </a>

        <nav className="nav__links" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn btn--filled nav__cta">
          Solicitar información
        </a>

        <button
          className={`nav__hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-menu__links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu__link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mobile-menu__link"
            onClick={handleLinkClick}
            style={{ color: 'var(--accent)' }}
          >
            Solicitar información
          </a>
        </nav>

        <div className="mobile-menu__footer">
          <div className="mobile-menu__footer-item">
            Teléfono:{' '}
            <a href="tel:+573016001737">+57 301 600 1737</a>
          </div>
          <div className="mobile-menu__footer-item">
            Email:{' '}
            <a href="mailto:contacto@sveltea.com.co">contacto@sveltea.com.co</a>
          </div>
          <div className="mobile-menu__footer-item">
            INVIMA 2022DM-0025405
          </div>
        </div>
      </div>
    </>
  )
}
