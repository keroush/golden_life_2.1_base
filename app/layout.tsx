import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Golden Life | Premium Properties Worldwide',
  description: 'Discover the world\'s most exclusive real estate properties. Luxury homes, penthouses, and commercial spaces in prime locations.',
  keywords: 'luxury real estate, premium properties, exclusive homes, penthouses, commercial real estate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
