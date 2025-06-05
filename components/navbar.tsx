"use client"

import { useState, useEffect } from "react"
import { Menu, X, Code, LayoutDashboard, LogOut, Sun, Moon, Monitor } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useClerk } from "@clerk/nextjs"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { isSignedIn, signOut } = useClerk()
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToModules = () => {
    document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="h-4 w-4" />
    
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  // Dynamic theme detection matching home page logic
  const isDark = mounted
    ? theme === "dark" ||
      (!theme && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      theme === "system"
    : true // Default to dark during SSR

  // Updated nav classes to match home page background
  const navClasses = `
    backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-500 ease-in-out
    ${isDark 
      ? 'bg-gradient-to-r from-black via-gray-900 to-gray-800/90 border-gray-800/50 shadow-lg shadow-gray-900/20' 
      : 'bg-gradient-to-r from-gray-50 via-white to-gray-100/90 border-gray-200/50 shadow-lg shadow-gray-100/50'
    }
  `

  const logoGradientClasses = `
    p-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105
    ${isDark 
      ? 'bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800' 
      : 'bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800'
    }
  `

  const primaryButtonClasses = `
    transition-all duration-300 hover:scale-105 text-white flex items-center gap-2 shadow-lg
    ${isDark 
      ? 'bg-gray-800 hover:bg-gray-700 hover:shadow-gray-700/25' 
      : 'bg-gray-800 hover:bg-gray-900 hover:shadow-gray-500/25'
    }
  `

  const outlineButtonClasses = `
    transition-all duration-300 hover:scale-105 bg-transparent
    ${isDark 
      ? 'border-gray-600/50 hover:border-gray-400 hover:bg-gray-800/30 hover:text-gray-200 text-gray-300' 
      : 'border-gray-800/50 hover:border-gray-900 hover:bg-transparent hover:text-gray-900 text-gray-800'
    }
  `

  const mobileMenuClasses = `
    md:hidden py-4 border-t transition-all duration-300
    ${isDark ? 'border-gray-800/50' : 'border-gray-200/50'}
  `

  const themeButtonVariant = (targetTheme: string) => {
    return theme === targetTheme ? "default" : "outline"
  }

  return (
    <nav className={mounted ? navClasses : 'backdrop-blur-md border-b sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-gray-800/90 border-gray-800/50'}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={mounted ? logoGradientClasses : 'p-2 rounded-lg shadow-lg bg-gradient-to-br from-gray-700 to-gray-900'}>
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className={mounted ? `
              text-xl font-bold transition-all duration-300
              ${isDark 
                ? 'bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent'
              }
            ` : 'text-xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent'}>
              redevblock
            </span>
          </div>
          <Link href="/modules" className="hidden md:block">
          <button 
              onClick={scrollToModules} 
              className={mounted ? `
                text-sm font-medium transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg
                ${isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                  : 'text-gray-800 hover:text-gray-900 hover:bg-gray-100/50'
                }
                ` : 'text-sm font-medium px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50'}
                >
              Explore Modules
            </button>
              </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {isSignedIn ? (
              <>
                <Link href="/dashboard">
                  <Button className={primaryButtonClasses}>
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  onClick={() => signOut()}
                  variant="outline" 
                  className={`flex items-center gap-2 ${outlineButtonClasses}`}
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link href="/sign-in">
                <Button variant="outline" className={mounted ? outlineButtonClasses : 'border-gray-600/50 hover:border-gray-400 hover:bg-gray-800/30 text-gray-300'}>
                  Sign In
                </Button>
              </Link>
            )}
            
            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className={`transition-all duration-300 hover:scale-110 ${outlineButtonClasses}`}
                >
                  {getThemeIcon()}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end"
                className={`
                  transition-all duration-300 backdrop-blur-md
                  ${isDark 
                    ? 'bg-gray-900/90 border-gray-700/50' 
                    : 'bg-white/90 border-gray-200/50'
                  }
                `}
              >
                <DropdownMenuItem 
                  onClick={() => setTheme("light")}
                  className={`transition-colors duration-200 ${
                    isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'
                  }`}
                >
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setTheme("dark")}
                  className={`transition-colors duration-200 ${
                    isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'
                  }`}
                >
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setTheme("system")}
                  className={`transition-colors duration-200 ${
                    isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'
                  }`}
                >
                  <Monitor className="mr-2 h-4 w-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={mounted ? `
              md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110
              ${isDark 
                ? 'hover:bg-gray-800/50 text-gray-300 hover:text-white' 
                : 'hover:bg-gray-100/50 text-gray-800 hover:text-gray-900'
              }
            ` : 'md:hidden p-2 rounded-lg hover:bg-gray-800/50 text-gray-300 hover:text-white'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={mobileMenuClasses}>
            <div className="flex flex-col gap-2">
              {isSignedIn ? (
                <>
                  <Link href="/dashboard">
                    <Button className={`w-full justify-start ${primaryButtonClasses}`}>
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => signOut()}
                    variant="outline" 
                    className={`w-full justify-start ${outlineButtonClasses}`}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link href="/sign-in">
                  <Button 
                    variant="outline" 
                    className={`w-full justify-start ${outlineButtonClasses}`}
                  >
                    Sign In
                  </Button>
                </Link>
              )}
              
              {/* Mobile Theme Toggle */}
              {mounted && (
                <div className="flex gap-2">
                  <Button 
                    onClick={() => setTheme("light")}
                    variant={themeButtonVariant("light")}
                    size="sm"
                    className={`flex-1 transition-all duration-300 ${
                      theme === "light" 
                        ? (isDark ? primaryButtonClasses : 'bg-gray-800 hover:bg-gray-900 text-white') 
                        : outlineButtonClasses
                    }`}
                  >
                    <Sun className="h-4 w-4 mr-2" />
                    Light
                  </Button>
                  <Button 
                    onClick={() => setTheme("dark")}
                    variant={themeButtonVariant("dark")}
                    size="sm"
                    className={`flex-1 transition-all duration-300 ${
                      theme === "dark" 
                        ? primaryButtonClasses 
                        : outlineButtonClasses
                    }`}
                  >
                    <Moon className="h-4 w-4 mr-2" />
                    Dark
                  </Button>
                  <Button 
                    onClick={() => setTheme("system")}
                    variant={themeButtonVariant("system")}
                    size="sm"
                    className={`flex-1 transition-all duration-300 ${
                      theme === "system" 
                        ? (isDark ? primaryButtonClasses : 'bg-gray-800 hover:bg-gray-900 text-white') 
                        : outlineButtonClasses
                    }`}
                  >
                    <Monitor className="h-4 w-4 mr-2" />
                    System
                  </Button>
                </div>
              )}

              <button 
                onClick={scrollToModules} 
                className={`
                  w-full justify-start text-left px-3 py-2 rounded-lg transition-all duration-300
                  ${isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-800 hover:text-gray-900 hover:bg-gray-100/50'
                  }
                `}
              >
                Explore Modules
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}