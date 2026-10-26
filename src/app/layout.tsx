import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SiteAnalytics } from '@/components/landing/SiteAnalytics'
import { SITE_URL } from '@/components/landing/links'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Departamento Leve',
}

export const viewport: Viewport = {
  themeColor: '#10233a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        {/* Rastreamento e aviso de cookies em todas as páginas */}
        <SiteAnalytics />
      </body>
    </html>
  )
}
