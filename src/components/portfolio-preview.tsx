import Image from 'next/image'
import Link from 'next/link'
import { Code, Sparkles, Calendar } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    icon: Code,
    image: '/generated/portfolio-ecommerce.png',
    description: 'Modern online store with AI recommendations',
  },
  {
    id: 2,
    title: 'AI Dashboard',
    icon: Sparkles,
    image: '/generated/portfolio-services.png',
    description: 'Analytics platform with predictive insights',
  },
  {
    id: 3,
    title: 'Creative Agency Site',
    icon: Calendar,
    image: '/generated/portfolio-restaurant.png',
    description: 'Portfolio website with smart booking',
  },
]

export function PortfolioPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-4">PORTFOLIO</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing recent projects that combine beautiful design with powerful functionality
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-card-foreground">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
