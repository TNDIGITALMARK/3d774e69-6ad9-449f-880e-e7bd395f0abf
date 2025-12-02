export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { PortfolioPreview } from '@/components/portfolio-preview'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PortfolioPreview />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}