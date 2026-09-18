import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Arkana Legal Consulting',
    template: '%s | Arkana Legal Consulting',
  },
  description: 'Solusi hukum terukur dan strategi bisnis yang aman untuk pertumbuhan jangka panjang perusahaan Anda.',
  keywords: ['konsultan hukum', 'legal consulting', 'hukum bisnis', 'konsultasi hukum', 'Arkana Legal'],
  openGraph: {
    title: 'Arkana Legal Consulting',
    description: 'Solusi hukum terukur dan strategi bisnis yang aman untuk pertumbuhan jangka panjang perusahaan Anda.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Arkana Legal Consulting',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
