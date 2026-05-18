import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope, DM_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dmmono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sveltea — Bioinductor de colágeno con hidroxiapatita de calcio',
  description:
    'Bioinductor de colágeno con hidroxiapatita de calcio. Manejo integral de la celulitis y rejuvenecimiento facial. Sveltea por Cellstech. INVIMA 2022DM-0025405.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${manrope.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
