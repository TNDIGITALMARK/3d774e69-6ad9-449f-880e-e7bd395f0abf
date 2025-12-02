import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-hero text-secondary-foreground overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-caption text-primary-light font-bold tracking-widest">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-white">LET'S WORK TOGETHER</h2>
          <p className="text-body-lg text-white/80 max-w-2xl mx-auto">
            Ready to transform your digital presence? Reach out and let's create something amazing
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Contact Info - 2 columns */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="group flex items-start gap-5 glass hover:bg-white/12 rounded-card p-6 border border-white/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">Email</h3>
                  <a href="mailto:contact@singhtech.com" className="text-white/80 hover:text-primary-light transition-colors font-medium">
                    contact@singhtech.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-5 glass hover:bg-white/12 rounded-card p-6 border border-white/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">Phone</h3>
                  <a href="tel:5551234567" className="text-white/80 hover:text-primary-light transition-colors font-medium">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-5 glass hover:bg-white/12 rounded-card p-6 border border-white/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">Location</h3>
                  <p className="text-white/80 font-medium">Serving clients nationwide</p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="glass rounded-card-lg p-6 border border-white/20 text-center">
              <Sparkles className="w-10 h-10 text-primary-light mx-auto mb-3" />
              <p className="text-white font-bold text-lg mb-2">Quick Response Time</p>
              <p className="text-white/70 text-sm">We typically respond within 24 hours</p>
            </div>
          </div>

          {/* Quick Contact Form - 3 columns */}
          <div className="md:col-span-3">
            <div className="glass rounded-card-lg p-10 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-3">Send a Message</h3>
              <p className="text-white/70 mb-8">Fill out the form below and we'll get back to you shortly</p>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">Your Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent resize-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-white hover:bg-white/90 text-foreground px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
