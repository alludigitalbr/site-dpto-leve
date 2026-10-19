import type { Metadata, Viewport } from 'next'
import { SITE_URL } from '@/components/landing/links'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Departamento Leve',
}

export const viewport: Viewport = {
  themeColor: '#0D1B2A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
