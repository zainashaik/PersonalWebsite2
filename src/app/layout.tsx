import React from 'react'
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zaina Shaik's Website",
  description: 'Personal website of Zaina Shaik',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-50 to-purple-50">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 