import { Code, Palette, Smartphone, Sparkles, Zap, Database } from 'lucide-react'

const services = [
  {
    category: 'WEB DESIGN',
    icon: Code,
    items: [
      'Custom Development',
      'Responsive Design',
      'E-commerce Solutions',
    ],
  },
  {
    category: 'AI INTEGRATION',
    icon: Sparkles,
    items: [
      'Machine Learning',
      'Chatbots',
      'Predictive Analytics',
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">SERVICES</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive web solutions powered by cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.category}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.category}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-200">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
