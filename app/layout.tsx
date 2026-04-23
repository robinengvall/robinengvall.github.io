import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robin Engvall | AI & Backend Developer',
  description: 'Junior Python Developer specializing in AI, backend systems, and data-driven solutions. Building intelligent systems that solve real-world problems.',
  keywords: ['Python Developer', 'AI Developer', 'Backend Developer', 'Machine Learning', 'Full Stack Developer', 'Robin Engvall'],
  authors: [{ name: 'Robin Engvall' }],
  openGraph: {
    title: 'Robin Engvall | AI & Backend Developer',
    description: 'Junior Python Developer specializing in AI, backend systems, and data-driven solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
