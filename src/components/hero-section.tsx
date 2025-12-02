import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-hero text-light py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary-light" />
              <span className="text-sm font-semibold text-light-secondary tracking-wide">
                5+ Years of Excellence
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-light leading-tight">
                <span className="block text-gradient-primary">
                  PROFESSIONAL
                </span>
                <span className="block">
                  WEB DESIGN
                </span>
                <span className="block text-light-secondary">
                  SERVICES
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-light-muted font-light leading-relaxed max-w-xl">
                Empowering businesses with cutting-edge digital solutions and innovative design strategies
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-light px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 glass hover:bg-white/15 text-light px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-light">50+</div>
                <div className="text-sm text-light-muted">Projects Delivered</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-light">100%</div>
                <div className="text-sm text-light-muted">Client Satisfaction</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-light">24/7</div>
                <div className="text-sm text-light-muted">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl" />

            {/* Main image container */}
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <Image
                src="/generated/hero-team-meeting.png"
                alt="Professional team collaboration"
                fill
                className="object-cover"
                priority
              />

              {/* Floating stat cards */}
              <div className="absolute bottom-6 left-6 glass rounded-xl p-4 z-20 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-light" />
                  </div>
                  <div>
                    <div className="text-light font-bold text-lg">AI Powered</div>
                    <div className="text-light-muted text-sm">Smart Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
