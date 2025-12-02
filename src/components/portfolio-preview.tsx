import Image from 'next/image'
import Link from 'next/link'
import { Code, Sparkles, Calendar, ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    icon: Code,
    image: '/generated/portfolio-ecommerce.png',
    description: 'Modern online store with AI-powered product recommendations and seamless checkout',
    category: 'Web Development',
    tags: ['React', 'AI', 'E-commerce'],
  },
  {
    id: 2,
    title: 'AI Dashboard',
    icon: Sparkles,
    image: '/generated/portfolio-services.png',
    description: 'Advanced analytics platform featuring predictive insights and real-time data',
    category: 'AI Integration',
    tags: ['Dashboard', 'Analytics', 'ML'],
  },
  {
    id: 3,
    title: 'Creative Agency Site',
    icon: Calendar,
    image: '/generated/portfolio-restaurant.png',
    description: 'Stunning portfolio website with intelligent booking system and CRM',
    category: 'Design & UX',
    tags: ['Portfolio', 'Booking', 'Design'],
  },
]

export function PortfolioPreview() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-caption text-primary font-bold tracking-widest">
              OUR WORK
            </span>
          </div>
          <h2 className="text-foreground">
            FEATURED PROJECTS
          </h2>
          <p className="text-body-lg text-muted max-w-2xl mx-auto">
            Showcasing recent projects that combine beautiful design with powerful functionality and cutting-edge technology
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className="group relative bg-card rounded-card-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-card-border hover:scale-105"
              >
                {/* Project Image with overlay */}
                <div className="relative h-56 bg-muted overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 glass rounded-full text-xs font-bold text-light border border-white/30">
                    {project.category}
                  </div>

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <IconComponent className="w-6 h-6 text-light" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-card-foreground text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-foreground-secondary text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 bg-gradient-primary hover:shadow-xl text-light px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
