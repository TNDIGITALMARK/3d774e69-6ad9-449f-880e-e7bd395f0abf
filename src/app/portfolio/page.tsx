export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { ArrowUpRight, TrendingUp, Users, Zap } from 'lucide-react'

const portfolioProjects = [
  {
    id: 1,
    title: 'E-commerce Platform with AI Recommendations',
    category: 'E-commerce',
    image: '/generated/portfolio-ecommerce.png',
    description:
      'Built a comprehensive e-commerce platform featuring AI-powered product recommendations, intelligent search, and personalized shopping experiences. The platform increased conversion rates by 40% and reduced cart abandonment.',
    technologies: ['Next.js', 'React', 'TensorFlow.js', 'Stripe', 'PostgreSQL'],
    metrics: {
      conversions: '+40%',
      revenue: '+65%',
      engagement: '+80%',
    },
    year: '2024',
  },
  {
    id: 2,
    title: 'Restaurant Website with Smart Ordering',
    category: 'Hospitality',
    image: '/generated/portfolio-restaurant.png',
    description:
      'Developed an elegant restaurant website with integrated AI-powered menu recommendations and seamless online ordering. Features include smart dietary filtering, real-time order tracking, and predictive inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    metrics: {
      orders: '+120%',
      satisfaction: '98%',
      efficiency: '+45%',
    },
    year: '2023',
  },
  {
    id: 3,
    title: 'Professional Services with Automated Scheduling',
    category: 'Professional Services',
    image: '/generated/portfolio-services.png',
    description:
      'Created a comprehensive scheduling and client management platform for professional services. Features AI-powered appointment optimization, automated reminders, and intelligent resource allocation reducing no-shows by 60%.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'SendGrid'],
    metrics: {
      noShows: '-60%',
      bookings: '+85%',
      automation: '90%',
    },
    year: '2024',
  },
]

const processSteps = [
  {
    icon: Users,
    title: 'Discovery',
    description: 'Deep dive into your business goals, target audience, and competitive landscape',
  },
  {
    icon: Zap,
    title: 'Design & Development',
    description: 'Create beautiful, functional designs and implement with cutting-edge technology',
  },
  {
    icon: TrendingUp,
    title: 'Launch & Optimize',
    description: 'Deploy your solution and continuously improve based on real user data',
  },
]

export default function PortfolioPage() {
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
            <h1 className="text-light mb-6">Portfolio</h1>
            <p className="text-xl text-light-muted leading-relaxed">
              Showcasing successful projects that combine beautiful design with powerful AI-driven functionality.
              Each project demonstrates our commitment to delivering measurable results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Project Image */}
                <div className="flex-1">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-accent/90 rounded-full text-sm font-medium text-accent-foreground mb-4 shadow-sm">
                    {project.category} • {project.year}
                  </div>
                  <h2 className="text-foreground mb-4">{project.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="bg-accent/50 rounded-xl p-4 border border-border shadow-md">
                        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-hero text-light py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-light mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-light-muted mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with cutting-edge design and AI technology
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get in Touch
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
