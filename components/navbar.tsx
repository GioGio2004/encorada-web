"use client"

import { useState } from "react"
import { Menu, X, Code, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const scrollToModules = () => {
    document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">DevServices</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button onClick={scrollToContact} variant="default" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Us
            </Button>
            <Button onClick={scrollToModules} variant="outline">
              Explore Modules
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-2">
              <Button onClick={scrollToContact} variant="default" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
              <Button onClick={scrollToModules} variant="outline" className="w-full justify-start">
                Explore Modules
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
