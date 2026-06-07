import type { Metadata, Viewport } from 'next'
import { Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-source-serif-4',
  display: 'swap',
  axes: ['opsz'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fbf8ff',
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  title: {
    default: 'The Knowledge Library — Statistics for Data Analysts',
    template: '%s | The Knowledge Library',
  },
  description:
    'Học thống kê không phải để giải phương trình, mà để thấu hiểu câu chuyện đằng sau những con số thô. Nền tảng kiến thức thống kê cho data analyst Việt Nam.',
  keywords: ['thống kê', 'data analyst', 'statistics', 'python', 'SQL', 'machine learning'],
  authors: [{ name: 'Nam Nguyễn' }],
  creator: 'Nam Nguyễn',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'The Knowledge Library',
    title: 'The Knowledge Library — Statistics for Data Analysts',
    description:
      'Học thống kê không phải để giải phương trình, mà để thấu hiểu câu chuyện đằng sau những con số thô.',
    images: [
      {
        url: '/og/home.png',
        width: 1200,
        height: 630,
        alt: 'The Knowledge Library — Thư Viện Tri Thức',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Knowledge Library — Statistics for Data Analysts',
    description:
      'Học thống kê không phải để giải phương trình, mà để thấu hiểu câu chuyện đằng sau những con số thô.',
    images: ['/og/home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'vi-VN': '/',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      className={[
        sourceSerif4.variable,
        jetbrainsMono.variable,
        GeistSans.variable,
        GeistMono.variable,
      ].join(' ')}
    >
      <body className="bg-background text-on-surface antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
