import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lista D',
  description: 'Lista D - Juntos por uma escola melhor!',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
} 