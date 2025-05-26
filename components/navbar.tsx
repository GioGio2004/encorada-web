"use client"

import { useState } from "react"
import { Menu, X, Code, Mail } from 'lucide-react'
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
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DevServices</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={scrollToContact} 
              className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </Button>
            <Button 
              onClick={scrollToModules} 
              variant="outline" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Explore Modules
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <div className="flex flex-col gap-2">
              <Button 
                onClick={scrollToContact} 
                className="w-full justify-start bg-purple-600 hover:bg-purple-700"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
              <Button 
                onClick={scrollToModules} 
                variant="outline" 
                className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Explore Modules
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
