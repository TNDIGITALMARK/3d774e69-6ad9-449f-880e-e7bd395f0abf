export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
  MessageSquare,
  TrendingUp,
  FileText,
  Zap,
  Database,
  Brain,
  BarChart3,
  Shield,
  CheckCircle2,
} from 'lucide-react'

const aiServices = [
  {
    icon: MessageSquare,
    title: 'Intelligent Customer Support Chatbots',
    description:
      'Deploy AI-powered chatbots that understand context, handle complex queries, and provide 24/7 customer support. Our chatbots reduce response times by 90% while maintaining high satisfaction rates.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Sentiment analysis',
      'Seamless human handoff',
    ],
    pricing: 'Starting at $2,500',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics Dashboards',
    description:
      'Leverage machine learning to forecast trends, identify opportunities, and make data-driven decisions. Our analytics platforms transform raw data into actionable insights.',
    features: [
      'Real-time data visualization',
      'Custom KPI tracking',
      'Automated reporting',
      'Trend prediction',
    ],
    pricing: 'Starting at $3,500',
  },
  {
    icon: FileText,
    title: 'Automated Content Generation',
    description:
      'Generate high-quality content at scale with AI-powered writing assistants. Perfect for product descriptions, blog posts, and marketing materials.',
    features: [
      'SEO-optimized content',
      'Brand voice matching',
      'Multi-format support',
      'Quality assurance',
    ],
    pricing: 'Starting at $2,000',
  },
  {
    icon: Zap,
    title: 'Smart Form Processing',
    description:
      'Automate data entry and form processing with intelligent document recognition. Extract information from PDFs, images, and scanned documents with high accuracy.',
    features: [
      'OCR technology',
      'Data validation',
      'Auto-classification',
      'Integration ready',
    ],
    pricing: 'Starting at $2,800',
  },
]

const benefits = [
  {
    icon: Brain,
    title: 'Cutting-Edge Technology',
    description: 'Leverage the latest advances in AI and machine learning',
  },
  {
    icon: TrendingUp,
    title: 'Measurable ROI',
    description: 'Track clear improvements in efficiency and revenue',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security and data protection',
  },
  {
    icon: Database,
    title: 'Seamless Integration',
    description: 'Works with your existing systems and workflows',
  },
]

const pricingTiers = [
  {
    name: 'Basic AI Integration',
    price: '$2,500+',
    description: 'Perfect for small businesses getting started with AI',
    features: [
      'Single AI feature implementation',
      'Basic customization',
      '3 months support',
      'Training documentation',
    ],
  },
  {
    name: 'Professional Package',
    price: '$5,000+',
    description: 'Comprehensive AI solutions for growing businesses',
    features: [
      'Multiple AI features',
      'Advanced customization',
      '6 months support',
      'Team training sessions',
      'Performance monitoring',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise Solutions',
    price: 'Custom',
    description: 'Tailored AI implementations for large organizations',
    features: [
      'Full AI platform development',
      'Complete customization',
      '12 months support',
      'Dedicated account manager',
      'SLA guarantees',
      'Priority feature requests',
    ],
  },
]

export default function ServicesPage() {
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
            <h1 className="text-light mb-6">AI Integration Services</h1>
            <p className="text-xl text-light-muted leading-relaxed">
              Transform your business with intelligent automation and AI-powered features. We specialize in
              integrating cutting-edge artificial intelligence into web applications to boost efficiency,
              enhance user experience, and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Our AI Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized AI solutions designed to solve real business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiServices.map((service) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-primary font-medium text-sm">{service.pricing}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Why Choose Our AI Services?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the package that fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-8 ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground border-2 border-primary shadow-2xl transform scale-105'
                    : 'bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300'
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    tier.highlighted ? 'text-primary-foreground' : 'text-card-foreground'
                  }`}
                >
                  {tier.name}
                </h3>
                <div
                  className={`text-3xl font-bold mb-4 ${
                    tier.highlighted ? 'text-primary-foreground' : 'text-primary'
                  }`}
                >
                  {tier.price}
                </div>
                <p
                  className={`mb-6 ${
                    tier.highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'
                  }`}
                >
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-5 h-5 flex-shrink-0 ${
                          tier.highlighted ? 'text-primary-foreground' : 'text-primary'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.highlighted ? 'text-primary-foreground' : 'text-card-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${
                    tier.highlighted
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'bg-primary text-primary-foreground hover:bg-primary-hover'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-hero text-light py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-light mb-6">Ready to Integrate AI Into Your Business?</h2>
          <p className="text-xl text-light-muted mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how AI can transform your operations
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
