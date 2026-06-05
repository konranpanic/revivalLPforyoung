import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Louis Vuitton Premium Selection | Revival.tokyo',
  description: '誰もが一度は憧れる世界のトップブランド、ルイ・ヴィトン。100%本物保証のプレミアムリユース品を厳選してお届けします。',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      {/* luxury-fixed-bg が背景画像を固定します */}
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased luxury-fixed-bg`}>
        
        {/* 全体を包む半透明レイヤー */}
        <div className="min-h-screen bg-background/50">
          {children}
        </div>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
