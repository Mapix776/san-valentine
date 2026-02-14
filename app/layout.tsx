import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Special_Elite } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-special-elite',
})

export const metadata: Metadata = {
  title: 'Para Mi Niño - Una Historia de Amor',
  description: 'Una carta de amor cinematografica para el director de mi vida',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${specialElite.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
