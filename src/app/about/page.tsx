export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { Award, Target, Users, Zap } from 'lucide-react'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

const values = [
  {
    icon: Target,
    title: 'Client-Focused',
    description:
      'Your success is our success. We prioritize understanding your unique needs and delivering solutions that exceed expectations.',
  },
  {
    icon: Zap,
    title: 'Innovation-Driven',
    description:
      'We stay ahead of the curve, leveraging the latest technologies and best practices to give you a competitive advantage.',
  },
  {
    icon: Award,
    title: 'Quality Commitment',
    description:
      'Every project receives meticulous attention to detail, ensuring professional-grade results that stand the test of time.',
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description:
      'We work as an extension of your team, maintaining clear communication and transparency throughout the entire process.',
  },
]

const expertise = [
  'Modern Web Development (React, Next.js, TypeScript)',
  'Responsive & Mobile-First Design',
  'AI & Machine Learning Integration',
  'E-commerce Solutions',
  'Custom CMS Development',
  'API Development & Integration',
  'Performance Optimization',
  'SEO & Analytics Implementation',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-light py-24 md:py-28 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-light mb-6">About Singh Tech</h1>
            <p className="text-xl text-light-muted leading-relaxed">
              Transforming businesses through innovative web design and AI integration. With 5+ years of
              experience, we bring expertise, creativity, and cutting-edge technology to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Singh Tech was founded with a clear vision: to help businesses harness the power of modern
                  web technology and artificial intelligence. What started as a solo web design consultancy
                  has grown into a trusted partner for businesses seeking digital transformation.
                </p>
                <p>
                  With over 5 years of hands-on experience in web development and AI integration, founder
                  Davinder Singh brings a unique combination of technical expertise and business acumen to
                  every project. This experience enables Singh Tech to not just build websites, but to create
                  strategic digital solutions that drive real business results.
                </p>
                <p>
                  Today, Singh Tech specializes in combining beautiful, user-friendly design with powerful
                  AI-driven features. We believe that technology should serve people, not complicate their
                  lives. That's why we focus on creating solutions that are both sophisticated and intuitive.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/generated/davinder-singh-headshot.png"
                alt="Davinder Singh - Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 shadow-md">
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Technical Expertise</h2>
              <p className="text-muted-foreground text-lg">
                Proficient in modern technologies and frameworks
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {expertise.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-card-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-hero text-light py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-light mb-6">Let's Work Together</h2>
          <p className="text-xl text-light-muted mb-8 max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? Let's discuss how Singh Tech can help you
            achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portfolio"
              className="inline-block bg-white text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Our Work
            </a>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
