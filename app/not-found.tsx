"use client";

import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

interface ParticleProps {
  key: number;
  top: string;
  left: string;
  opacity: number;
  scale: number;
  duration: number;
}

export default function NotFound(): JSX.Element {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [animationStep, setAnimationStep] = useState<number>(0);
  const [glitchActive, setGlitchActive] = useState<boolean>(false);
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Initial load animation
    setIsLoaded(true);
    
    // Generate particles only on client-side
    const newParticles: ParticleProps[] = Array.from({ length:20 }).map((_, i) => ({
      key: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.3,
      scale: Math.random() * 2 + 0.5,
      duration: Math.random() * 10 + 10
    }));
    setParticles(newParticles);
    
    // Sequence animations
    const timers = [
      setTimeout(() => setAnimationStep(1), 400),
      setTimeout(() => setAnimationStep(2), 800),
      setTimeout(() => setAnimationStep(3), 1200),
      setTimeout(() => setAnimationStep(4), 1600)
    ];
    
    // Set up periodic glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(glitchInterval);
    };
  }, []);

  // Dynamic theme detection matching navbar logic
  const isDark = mounted ? (theme === 'dark' || (!theme && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) || theme === 'system') : true;

  const backgroundClasses = `
    min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 ease-in-out
    ${isDark 
      ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }
  `;

  const gradientOverlayClasses = `
    absolute top-0 left-0 w-full h-full transition-all duration-500
    ${isDark 
      ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/20 via-gray-900 to-black' 
      : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300/20 via-gray-50 to-white'
    }
  `;

  const blurElementClasses = `
    absolute blur-3xl rounded-full animate-pulse transition-all duration-500
    ${isDark ? 'bg-gray-600/10' : 'bg-gray-400/20'}
  `;

  const gridOverlayClasses = `
    absolute inset-0 transition-all duration-500
    ${isDark 
      ? 'bg-[linear-gradient(to_right,rgba(75,85,99,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.1)_1px,transparent_1px)]' 
      : 'bg-[linear-gradient(to_right,rgba(156,163,175,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,163,175,0.2)_1px,transparent_1px)]'
    } bg-[size:4rem_4rem]
  `;

  const particleClasses = `
    absolute w-1 h-1 rounded-full transition-all duration-500
    ${isDark ? 'bg-gray-400/30' : 'bg-gray-600/40'}
  `;

  const mainTextClasses = `
    text-[9rem] md:text-[12rem] font-black text-transparent bg-clip-text leading-none select-none transition-all duration-500
    ${isDark 
      ? 'bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700' 
      : 'bg-gradient-to-br from-gray-600 via-gray-800 to-gray-900'
    } ${glitchActive ? 'glitch' : ''}
  `;

  const borderElementClasses = `
    border-2 transition-all duration-500
    ${isDark ? 'border-gray-500/50' : 'border-gray-400/60'}
  `;

  const circleElementClasses = `
    absolute -top-12 -right-12 w-24 h-24 transition-all duration-500
  `;

  const titleClasses = `
    text-3xl md:text-4xl font-bold mb-4 transition-all duration-500
    ${isDark ? 'text-white' : 'text-gray-900'}
  `;

  const descriptionClasses = `
    leading-relaxed transition-all duration-500
    ${isDark ? 'text-gray-300' : 'text-gray-600'}
  `;

  const quickNavClasses = `
    backdrop-blur-sm p-5 rounded-xl border mb-6 transition-all duration-500
    ${isDark 
      ? 'bg-gray-800/20 border-gray-600/20' 
      : 'bg-gray-100/40 border-gray-300/30'
    }
  `;

  const quickNavTitleClasses = `
    text-lg font-medium mb-3 transition-all duration-500
    ${isDark ? 'text-gray-200' : 'text-gray-800'}
  `;

  const linkClasses = `
    flex items-center gap-2 transition-colors duration-300
    ${isDark 
      ? 'text-gray-400 hover:text-gray-200' 
      : 'text-gray-600 hover:text-gray-800'
    }
  `;

  const primaryButtonClasses = `
    px-6 py-6 rounded-lg font-medium transition-all duration-300 shadow-lg flex items-center gap-2 group
    ${isDark 
      ? 'bg-gray-700 hover:bg-gray-600 text-white hover:shadow-gray-600/20' 
      : 'bg-gray-800 hover:bg-gray-900 text-white hover:shadow-gray-500/20'
    }
  `;

  const secondaryButtonClasses = `
    px-6 py-6 rounded-lg font-medium border transition-all duration-300 shadow-lg flex items-center gap-2 group
    ${isDark 
      ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-600/30 hover:shadow-gray-600/20' 
      : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-400/40 hover:shadow-gray-400/20'
    }
  `;

  const refreshButtonClasses = `
    px-4 py-2 rounded-lg font-medium border transition-all duration-300 flex items-center gap-2 group
    ${isDark 
      ? 'bg-transparent hover:bg-gray-800/30 text-gray-400 hover:text-gray-200 border-gray-600/20' 
      : 'bg-transparent hover:bg-gray-100/50 text-gray-600 hover:text-gray-800 border-gray-400/30'
    }
  `;

  const footerClasses = `
    absolute bottom-0 left-0 right-0 p-4 text-center text-xs transition-all duration-1000
    ${isDark ? 'text-gray-500' : 'text-gray-400'}
    ${isLoaded ? "opacity-100" : "opacity-0"}
  `;

  return (
    <div className={mounted ? backgroundClasses : 'min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800'}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={mounted ? gradientOverlayClasses : 'absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/20 via-gray-900 to-black'}></div>
        <div className={`top-0 right-0 w-1/3 h-1/3 ${mounted ? blurElementClasses : 'absolute bg-gray-600/10 blur-3xl rounded-full animate-pulse'}`}></div>
        <div className={`bottom-0 left-0 w-1/2 h-1/2 ${mounted ? blurElementClasses : 'absolute bg-gray-600/10 blur-3xl rounded-full animate-pulse'}`} style={{ animationDuration: '7s' }}></div>
        
        {/* Grid overlay */}
        <div className={mounted ? gridOverlayClasses : 'absolute inset-0 bg-[linear-gradient(to_right,rgba(75,85,99,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.1)_1px,transparent_1px) bg-[size:4rem_4rem]'}></div>
        
        {/* Animated particles - only rendered after client-side hydration */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div 
              key={particle.key}
              className={mounted ? particleClasses : 'absolute w-1 h-1 bg-gray-400/30 rounded-full'}
              style={{
                top: particle.top,
                left: particle.left,
                opacity: particle.opacity,
                transform: `scale(${particle.scale})`,
                animation: `float ${particle.duration}s linear infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Left column - Error code and illustration */}
        <div className={`relative transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <div className="relative">
            {/* Animated 404 */}
            <div className={mounted ? mainTextClasses : 'text-[9rem] md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700 leading-none select-none'}>
              404
            </div>
            
            {/* Decorative elements */}
            <div className={`absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 ${mounted ? borderElementClasses : 'border-gray-500/50'}`}></div>
            <div className={`absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 ${mounted ? borderElementClasses : 'border-gray-500/50'}`}></div>
            
            {/* Circular animation */}
            <div className={mounted ? circleElementClasses : 'absolute -top-12 -right-12 w-24 h-24'}>
              <div className={`absolute inset-0 border-4 rounded-full ${isDark ? 'border-gray-600/20' : 'border-gray-400/30'}`}></div>
              <div className={`absolute inset-0 border-t-4 rounded-full animate-spin ${isDark ? 'border-gray-500' : 'border-gray-700'}`} style={{ animationDuration: '8s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Right column - Content */}
        <div className="max-w-md">
          <div className={`transition-all duration-700 delay-300 ${animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h1 className={mounted ? titleClasses : 'text-3xl md:text-4xl font-bold mb-4 text-white'}>We&apos;ve Lost This Page</h1>
          </div>
          
          <div className={`transition-all duration-700 delay-500 mb-6 ${animationStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className={mounted ? descriptionClasses : 'text-gray-300 leading-relaxed'}>
              The digital pathway you&apos;re looking for may have been moved, deleted, or perhaps never existed in the first place. Let&apos;s get you back on track.
            </p>
          </div>
          
          {/* Quick links section */}
          <div className={`transition-all duration-700 delay-700 ${animationStep >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className={mounted ? quickNavClasses : 'bg-gray-800/20 backdrop-blur-sm p-5 rounded-xl border border-gray-600/20 mb-6'}>
              <h3 className={mounted ? quickNavTitleClasses : 'text-lg font-medium text-gray-200 mb-3'}>Quick Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li className={mounted ? linkClasses : 'flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors'}>
                  <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
                  <Link href="/" className="hover:underline underline-offset-4">Return to Homepage</Link>
                </li>
                <li className={mounted ? linkClasses : 'flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors'}>
                  <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
                  <Link href="/contact" className="hover:underline underline-offset-4">Contact Support</Link>
                </li>
                <li className={mounted ? linkClasses : 'flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors'}>
                  <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
                  <Link href="/sitemap" className="hover:underline underline-offset-4">View Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-900 ${animationStep >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Button 
              onClick={() => router.back()} 
              className={mounted ? primaryButtonClasses : 'bg-gray-700 hover:bg-gray-600 text-white px-6 py-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-gray-600/20 flex items-center gap-2 group'}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
            
            <Button 
              onClick={() => router.push('/')}
              className={mounted ? secondaryButtonClasses : 'bg-gray-800 hover:bg-gray-700 text-white px-6 py-6 rounded-lg font-medium border border-gray-600/30 transition-all duration-300 shadow-lg hover:shadow-gray-600/20 flex items-center gap-2 group'}
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Homepage
            </Button>
            
            <Button 
              onClick={() => window.location.reload()}
              className={mounted ? refreshButtonClasses : 'bg-transparent hover:bg-gray-800/30 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg font-medium border border-gray-600/20 transition-all duration-300 flex items-center gap-2 group'}
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-all duration-500" />
              Refresh
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className={mounted ? footerClasses : 'absolute bottom-0 left-0 right-0 p-4 text-center text-gray-500 text-xs transition-all duration-1000 opacity-100'}>
        © {new Date().getFullYear()} Your Company Name • All rights reserved
      </div>
      
      {/* Inject CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        
        .glitch {
          position: relative;
          animation: glitch 500ms infinite;
        }
        
        .glitch:before,
        .glitch:after {
          content: "404";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-clip: text;
          -webkit-background-clip: text;
        }
        
        .glitch:before {
          left: 2px;
          text-shadow: -2px 0 #6b7280;
          animation: glitch-anim 650ms infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        
        .glitch:after {
          left: -2px;
          text-shadow: -2px 0 #4b5563;
          animation: glitch-anim2 375ms infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
          -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
        }
        
        @keyframes glitch-anim {
          0% { clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); }
          50% { clip-path: polygon(0 10%, 100% 10%, 100% 55%, 0 55%); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); }
        }
        
        @keyframes glitch-anim2 {
          0% { clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%); }
          50% { clip-path: polygon(0 70%, 100% 70%, 100% 90%, 0 90%); }
          100% { clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%); }
        }
      `}</style>
    </div>
  );
}