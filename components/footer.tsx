"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Code, 
  Mail, 
  MessageCircle, 
  Twitter, 
  Github, 
  Linkedin, 
  Send,
  Shield,
  Clock,
  Award,
  Heart,
  ArrowRight
} from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 border-t border-gray-700/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/5 via-transparent to-transparent"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gray-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <Code className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">CodeSolver</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Solving Next.js and React challenges for developers worldwide. Fast, reliable, and professional code solutions delivered in 24-48 hours.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-gray-300">Secure & Trusted</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "React Components",
                  "NPM Packages",
                  "API Integration",
                  "Bug Fixes",
                  "Performance Optimization",
                  "TypeScript Solutions"
                ].map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{service}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "How It Works", href: "#how-it-works" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-6">
                <motion.a
                  href="mailto:hello@codesolver.dev"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>hello@codesolver.dev</span>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <span>Live Chat Support</span>
                </motion.a>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-3">Follow us for updates</p>
                <div className="flex gap-3">
                  {[
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <motion.div 
                className="p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-white">Need Help Now?</span>
                </div>
                <p className="text-xs text-gray-300 mb-3">Get your solution in 24-48 hours</p>
                <motion.button
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="h-3 w-3" />
                  Send Request
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="border-t border-gray-700/50 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">500+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-sm">100% Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">24-48h Average Delivery</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700/30 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
                <p>© {currentYear} CodeSolver. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
              
              <motion.div 
                className="flex items-center gap-2 text-sm text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                <span>for developers</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer