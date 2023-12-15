import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

export function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
        <Header></Header>
        <div>
          {children}
        </div>
        <Footer></Footer>
    </div>
  )
}
