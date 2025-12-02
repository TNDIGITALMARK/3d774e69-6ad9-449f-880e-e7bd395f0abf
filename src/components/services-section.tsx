import { Code, Palette, Smartphone, Sparkles, Zap, Database, CheckCircle2, TrendingUp } from 'lucide-react'

const services = [
  {
    category: 'WEB DESIGN & DEVELOPMENT',
    icon: Code,
    description: 'Crafting beautiful, high-performance websites tailored to your brand',
    items: [
      { title: 'Custom Development', description: 'Bespoke solutions built from scratch' },
      { title: 'Responsive Design', description: 'Perfect on every device and screen' },
      { title: 'E-commerce Solutions', description: 'Powerful online stores that convert' },
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    category: 'AI INTEGRATION',
    icon: Sparkles,
    description: 'Leveraging artificial intelligence to supercharge your business',
    items: [
      { title: 'Machine Learning', description: 'Smart predictions and automation' },
      { title: 'Intelligent Chatbots', description: '24/7 customer engagement' },
      { title: 'Predictive Analytics', description: 'Data-driven insights and forecasting' },
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    category: 'PERFORMANCE OPTIMIZATION',
    icon: Zap,
    description: 'Lightning-fast experiences that keep users engaged',
    items: [
      { title: 'Speed Optimization', description: 'Sub-second load times guaranteed' },
      { title: 'SEO Enhancement', description: 'Rank higher, reach more customers' },
      { title: 'Analytics Setup', description: 'Track what matters to your business' },
    ],
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    category: 'CLOUD & INFRASTRUCTURE',
    icon: Database,
    description: 'Scalable, secure backend solutions that grow with you',
    items: [
      { title: 'Cloud Deployment', description: 'AWS, Azure, Google Cloud experts' },
      { title: 'Database Design', description: 'Optimized data architecture' },
      { title: 'API Development', description: 'Seamless integrations and connections' },
    ],
    gradient: 'from-green-500/20 to-teal-500/20',
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-hero text-secondary-foreground overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block">
            <span className="text-caption text-primary-light font-bold tracking-widest">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-white">OUR SERVICES</h2>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto">
            Comprehensive digital solutions powered by cutting-edge technology and innovative design thinking
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.category}
                className="group relative glass hover:bg-white/12 rounded-card-lg p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient accent overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-card-lg`} />

                <div className="relative z-10 space-y-6">
                  {/* Icon and title */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                        {service.category}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service items */}
                  <ul className="space-y-4 pt-4 border-t border-white/10">
                    {service.items.map((item) => (
                      <li key={item.title} className="flex items-start gap-3 group/item">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary-light group-hover/item:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-primary-light transition-colors">
                            {item.title}
                          </div>
                          <div className="text-sm text-white/60 mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-card-lg" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-20 text-center">
          <div className="glass rounded-card-lg p-10 max-w-3xl mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-primary-light" />
              <h3 className="text-2xl font-bold text-white">
                Ready to Transform Your Business?
              </h3>
            </div>
            <p className="text-white/80 mb-6 text-lg">
              Let's discuss how we can help you achieve your digital goals with our expert services
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-foreground px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
