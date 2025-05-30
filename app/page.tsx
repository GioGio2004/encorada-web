"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Zap,
  Rocket,
  Terminal,
  Send,
  Package,
  CreditCard,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import SupportChat from "@/components/support-chat";
import Footer from "@/components/footer";
import QuickRequestForm from "@/components/QuickRequestForm";
import TestimonialCard from "@/components/testimonials";
import ProcessStep from "@/components/ProcessStep";

interface ParticleProps {
  key: number;
  top: string;
  left: string;
  opacity: number;
  scale: number;
  duration: number;
}

interface StarProps {
  key: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  twinkleDelay: number;
  twinkleDuration: number;
}





export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [stars, setStars] = useState<StarProps[]>([]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setMounted(true);

    // Generate particles
    const newParticles: ParticleProps[] = Array.from({ length: 30 }).map(
      (_, i) => ({
        key: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.4 + 0.1,
        scale: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 20 + 15,
      })
    );
    setParticles(newParticles);

    // Generate stars
    const newStars: StarProps[] = Array.from({ length: 150 }).map((_, i) => ({
      key: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1, // 1-4px
      opacity: Math.random() * 0.8 + 0.2, // 0.2-1
      twinkleDelay: Math.random() * 5, // 0-5s delay
      twinkleDuration: Math.random() * 3 + 2, // 2-5s duration
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="min-h-screen transition-all duration-500 ease-in-out relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Animated background */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/10 via-gray-900 to-black"></div>

        {/* Animated stars */}
        {mounted && (
          <div className="absolute inset-0">
            {stars.map((star) => (
              <motion.div
                key={star.key}
                className="absolute rounded-full bg-white"
                style={{
                  top: star.top,
                  left: star.left,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                }}
                animate={{
                  opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: star.twinkleDuration,
                  delay: star.twinkleDelay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Shooting stars */}
        {mounted && (
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`shooting-star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 50}%`,
                  left: "-10px",
                }}
                animate={{
                  x: ["0vw", "110vw"],
                  y: ["0vh", "20vh"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 8 + Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 15,
                  ease: "easeOut",
                }}
              >
                {/* Shooting star trail */}
                <div className="absolute w-20 h-0.5 bg-gradient-to-r from-white to-transparent -translate-y-0.5 -translate-x-20 opacity-60"></div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Animated orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gray-700/10"
        />

        {/* Floating particles */}
        {mounted && (
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.key}
                className="absolute w-1 h-1 rounded-full bg-gray-400/30"
                style={{
                  top: particle.top,
                  left: particle.left,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [
                    particle.opacity,
                    particle.opacity * 0.3,
                    particle.opacity,
                  ],
                  scale: [particle.scale, particle.scale * 1.2, particle.scale],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Constellation lines */}
        {mounted && (
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient
                id="constellation-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="white" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Random constellation lines */}
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={`constellation-${i}`}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#constellation-gradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  delay: i * 0.5 + 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        )}
      </motion.div>

        <div className="fixed top-0 left-0 w-full z-50">

          <Navbar />
        </div>
      <SupportChat />

      {/* Background overlay */}

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-400">
                    Trusted by 500+ developers
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Stuck with Next.js?
                  <br />
                  <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                    We&apos;ll Fix It Fast
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-8 leading-relaxed text-gray-300"
              >
                From custom React components to complete npm packages - we solve
                your coding challenges in
                <span className="font-semibold text-gray-200">
                  {" "}
                  24-48 hours
                </span>
                . No more sleepless nights debugging!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Badge
                  variant="secondary"
                  className="px-3 py-1 bg-gray-800 text-gray-300"
                >
                  <Code className="mr-1 h-3 w-3" />
                  React Components
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-3 py-1 bg-gray-800 text-gray-300"
                >
                  <Package className="mr-1 h-3 w-3" />
                  NPM Packages
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-3 py-1 bg-gray-800 text-gray-300"
                >
                  <Zap className="mr-1 h-3 w-3" />
                  Bug Fixes
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-3 py-1 bg-gray-800 text-gray-300"
                >
                  <Rocket className="mr-1 h-3 w-3" />
                  API Integration
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {/* <Button
                  size="lg"
                  className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Your Request
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 border-2 border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <Play className="mr-2 h-5 w-5" />
                  See Examples
                </Button> */}
              </motion.div>
            </div>

            <div>
              <QuickRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              How It Works
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              From problem to solution in 5 simple steps
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            <ProcessStep
              step={1}
              title="Submit Your Request"
              description="Tell us about your Next.js/React challenge. Whether it's a custom component, npm package, or bug fix - we handle it all."
              icon={Send}
              delay={0}
            />
            <ProcessStep
              step={2}
              title="Get Instant Quote"
              description="Receive an automated email with project details and pricing. Our system analyzes your request and provides transparent pricing."
              icon={Mail}
              delay={0.1}
            />
            <ProcessStep
              step={3}
              title="Secure Payment"
              description="Pay safely through our integrated payment system with Google Pay, Apple Pay, or card. Payment is processed only after you approve the quote."
              icon={CreditCard}
              delay={0.2}
            />
            <ProcessStep
              step={4}
              title="We Build Your Solution"
              description="Our expert developers create your custom code, npm package, or component following best practices and your exact specifications."
              icon={Code}
              delay={0.3}
            />
            <ProcessStep
              step={5}
              title="Delivery & Ownership"
              description="Get your complete solution with documentation, GitHub repository, and full ownership. Ready to deploy or publish to npm."
              icon={Package}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              What Developers Say
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl font-bold text-white">
                Trusted by 500+ developers
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Chen"
              role="Frontend Developer at Startup"
              content="Saved me 3 days of work! They built a perfect React component with TypeScript support and comprehensive documentation. Worth every penny."
              delay={0}
            />
            <TestimonialCard
              name="Mike Rodriguez"
              role="Junior Developer"
              content="I was stuck on a complex API integration for weeks. They delivered a clean, working solution in 24 hours with detailed explanations."
              delay={0.1}
            />
            <TestimonialCard
              name="Alex Thompson"
              role="Freelance Developer"
              content="Their npm package solution was exactly what I needed. Professional code, great documentation, and delivered faster than promised."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4 ">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-gray-300">Average Delivery</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">Professional</div>
              <div className="text-gray-300">Quality Code</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Money Back Guarantee</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-12 rounded-3xl border backdrop-blur-sm bg-gray-900/40 border-gray-700/50"
          >
            <Sparkles className="h-12 w-12 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Solve Your Next.js Challenge?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join 500+ developers who trust us with their coding challenges.
              Get your solution in 24-48 hours!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Your Request Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Terminal className="mr-2 h-5 w-5" />
                View Sample Projects
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              💡 Free consultation • 💰 Pay only after approval • 🚀 24-48h
              delivery • 🔒 100% secure
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <div className="mt-12 pb-0 mb-0">
            <Footer />
          </div>
    </div>
  );
}
