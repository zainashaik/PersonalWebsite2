import React from 'react'
import Navbar from '@/components/Navbar'
import './globals.css'

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