import { ReactNode } from 'react'
import { Navigation } from './navigation'
import { Footer } from './footer'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
