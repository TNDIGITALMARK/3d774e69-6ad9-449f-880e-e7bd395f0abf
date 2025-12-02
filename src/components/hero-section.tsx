import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-white mb-6">
              PROFESSIONAL
              <br />
              WEB DESIGN SERVICES
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Empowering businesses with 5+ years of digital expertise
            </p>
            <div className="flex gap-4">
              <Link
                href="/portfolio"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-colors border border-white/20"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/generated/hero-team-meeting.png"
              alt="Professional team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
