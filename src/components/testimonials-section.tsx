import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Davinder Singh, Founder',
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
  },
  {
    metric: '60%',
    description: 'Reduction in customer service workload',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-4">TESTIMONIALS</h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-lg p-8 shadow-md border border-border"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-semibold text-card-foreground mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{testimonial.company}</p>
                  <p className="text-card-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-primary font-medium">{testimonial.result}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Client Results */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {clientResults.map((result, index) => (
              <div
                key={index}
                className="bg-accent/50 rounded-lg p-6 text-center border border-border"
              >
                <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
