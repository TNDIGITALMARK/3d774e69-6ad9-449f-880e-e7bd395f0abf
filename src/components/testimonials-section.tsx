import Image from 'next/image'
import { Quote, TrendingUp, Users, Award } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Davinder Singh',
    title: 'Founder & Lead Developer',
    company: 'Singh Tech',
    quote:
      'At Singh Tech, we bring over 5 years of experience creating custom web solutions. Our focus on combining beautiful design with AI-powered functionality sets us apart in the industry.',
    result: 'Trusted by businesses nationwide',
    image: '/generated/davinder-singh-headshot.png',
  },
]

const clientResults = [
  {
    metric: '40%',
    description: 'Avg. increase in online conversions',
    icon: TrendingUp,
  },
  {
    metric: '60%',
    description: 'Reduction in customer service workload',
    icon: Users,
  },
  {
    metric: '5+',
    description: 'Years of industry expertise',
    icon: Award,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-caption text-primary font-bold tracking-widest">
              ABOUT US
            </span>
          </div>
          <h2 className="text-foreground">MEET THE FOUNDER</h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-card-lg p-10 shadow-elevated border border-card-border relative overflow-hidden"
            >
              {/* Decorative quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-32 h-32 text-primary" />
              </div>

              <div className="flex flex-col md:flex-row gap-10 relative z-10">
                {/* Profile Image with gradient ring */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-primary rounded-full blur-lg opacity-50" />
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-1">{testimonial.title}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>

                  <blockquote className="text-body-lg text-card-foreground leading-relaxed border-l-4 border-primary pl-6 py-2">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-2 pt-4">
                    <Award className="w-5 h-5 text-primary" />
                    <p className="text-primary font-bold">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Client Results - Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {clientResults.map((result, index) => {
              const IconComponent = result.icon
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 rounded-card-lg p-8 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-light" />
                    </div>
                  </div>
                  <div className="text-5xl font-black text-gradient-primary mb-3">
                    {result.metric}
                  </div>
                  <p className="text-foreground-secondary font-semibold leading-snug">
                    {result.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
