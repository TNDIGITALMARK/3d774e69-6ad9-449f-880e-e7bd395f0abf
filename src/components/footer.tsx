import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Sparkles, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-secondary text-secondary-foreground py-16 border-t border-white/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Singh Tech</h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Professional web design and AI integration services with 5+ years of expertise in creating custom solutions that transform businesses and drive results.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="px-3 py-1 bg-white/10 rounded-full font-semibold">Est. 2019</span>
              <span>•</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>in the USA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-primary-light transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-primary-light transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary-light transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary-light transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary-light transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:contact@singhtech.com"
                className="w-12 h-12 rounded-xl glass hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-white/60 text-sm">
              Follow us for updates, tips, and insights
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm font-medium">
            © {currentYear} Singh Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/60 hover:text-primary-light transition-colors font-medium">
              Privacy Policy
            </Link>
            <span className="text-white/30">•</span>
            <Link href="#" className="text-white/60 hover:text-primary-light transition-colors font-medium">
              Terms of Service
            </Link>
            <span className="text-white/30">•</span>
            <Link href="#" className="text-white/60 hover:text-primary-light transition-colors font-medium">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
