"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  ChevronRight,
  Menu,
  X,
  Shield,
  Key,
  Zap,
  Globe,
  Code,
  BookOpen,
  Settings,
  AlertTriangle,
  Download,
  FileText,
  Info,
  Layers,
  Clock,
  Package,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CodeBlock } from "@/components/code-block"

interface Section {
  id: string
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

const sections: Section[] = [
  { id: "introduction", title: "What is Encorada?", icon: BookOpen },
  { id: "installation", title: "Installation", icon: Download },
  { id: "setup", title: "Setup", icon: Settings },
  { id: "provider-setup", title: "Provider Setup", icon: Layers },
  { id: "api-reference", title: "API Reference", icon: Key },
  { id: "examples", title: "Examples", icon: Code },
  { id: "use-cases", title: "Common Use Cases", icon: Zap },
  { id: "security", title: "Security", icon: Shield },
  { id: "troubleshooting", title: "Troubleshooting", icon: AlertTriangle },
]

export default function EncoradaDocumentation() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const FeatureCard = ({
    icon: Icon,
    title,
    description,
    color = "text-slate-300",
  }: {
    icon: React.ComponentType<{ size?: number; className?: string }>
    title: string
    description: string
    color?: string
  }) => (
    <Card className="bg-slate-800/50 border-slate-700/50 transition-all duration-200 hover:bg-slate-800/70">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon className={color} size={20} />
          <h3 className="font-semibold text-white">{title}</h3>
        </div>
        <p className="text-slate-300 text-sm">{description}</p>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 shadow-lg">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Encorada Documentation</h1>
                <p className="text-sm text-slate-400">Secure Variable Storage for Next.js</p>
              </div>
            </div>
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="md:hidden text-slate-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside
            className={`w-64 flex-shrink-0 transition-all duration-300 ${isMobileMenuOpen ? "block" : "hidden"} md:block`}
          >
            <div className="sticky top-24">
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <nav className="space-y-1">
                    {sections.map((section) => {
                      const Icon = section.icon
                      const isActive = activeSection === section.id
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${
                            isActive
                              ? "bg-purple-600/20 text-purple-300 border-r-2 border-purple-500"
                              : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                          }`}
                        >
                          <Icon
                            size={16}
                            className={`transition-colors duration-200 ${isActive ? "text-purple-400" : "group-hover:text-purple-400"}`}
                          />
                          <span className="font-medium">{section.title}</span>
                          {isActive && <ChevronRight size={14} className="ml-auto text-purple-400" />}
                        </a>
                      )
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  What is Encorada?
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  Encorada is a powerful library that encrypts data before storing it in localStorage. It provides
                  simple functions to securely store and retrieve sensitive information in web applications.
                </p>
                <div className="flex gap-2 mb-6">
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                    <Package className="w-3 h-3 mr-1" />
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
                    <Shield className="w-3 h-3 mr-1" />
                    AES-256-GCM
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                    <Globe className="w-3 h-3 mr-1" />
                    Next.js Ready
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard
                  icon={Shield}
                  title="AES-256-GCM Encryption"
                  description="Military-grade encryption ensures your data is secure"
                  color="text-green-400"
                />
                <FeatureCard
                  icon={Clock}
                  title="Automatic Expiration (TTL)"
                  description="Set expiration times for sensitive data"
                  color="text-blue-400"
                />
                <FeatureCard
                  icon={Code}
                  title="TypeScript Support"
                  description="Full TypeScript support with type definitions"
                  color="text-purple-400"
                />
                <FeatureCard
                  icon={Zap}
                  title="Simple API"
                  description="Easy-to-use functions for all storage operations"
                  color="text-yellow-400"
                />
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Download className="text-purple-400" size={28} />
                Installation
              </h2>

              <CodeBlock
                language="bash"
                code="npm install encorada"
                title="Install Package"
                description="Add Encorada to your Next.js project"
              />
            </section>

            {/* Setup */}
            <section id="setup" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="text-purple-400" size={28} />
                Setup
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">1. Environment Variables</h3>
                  <CodeBlock
                    language="plaintext"
                    filename=".env.local"
                    code="ENCORADA_SECRET_KEY=your-secure-random-string"
                    description="Create an environment variable for your encryption key"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">2. Next.js Configuration</h3>
                  <CodeBlock
                    language="javascript"
                    filename="next.config.js"
                    code={`/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENCORADA_SECRET_KEY: process.env.ENCORADA_SECRET_KEY,
  },
};

module.exports = nextConfig;`}
                    description="Expose the environment variable to the client"
                  />
                </div>
              </div>
            </section>

            {/* Provider Setup */}
            <section id="provider-setup" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Layers className="text-purple-400" size={28} />
                Provider Setup
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">Recommended</Badge>
              </h2>

              <Alert className="mb-6 bg-blue-500/10 border-blue-500/20">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-blue-300">
                  The provider pattern is the recommended way to use Encorada in Next.js applications. It handles
                  initialization automatically and provides a clean API through React Context.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">1. Create the Provider</h3>
                  <CodeBlock
                    language="typescript"
                    filename="lib/encorada/EncoradaProvider.tsx"
                    code={`'use client';

import { initialize, setVariable, getVariable, removeVariable, variableExists, clearVariables } from 'encorada';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the context type with all Encorada functions
type EncoradaContextType = {
  isInitialized: boolean;
  error: string | null;
  setVariable: typeof setVariable;
  getVariable: typeof getVariable;
  removeVariable: typeof removeVariable;
  variableExists: typeof variableExists;
  clearVariables: typeof clearVariables;
};

const EncoradaContext = createContext<EncoradaContextType | null>(null);

interface EncoradaProviderProps {
  children: ReactNode;
}

export function EncoradaProvider({ children }: EncoradaProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const key = process.env.ENCORADA_SECRET_KEY;
    
    if (!key) {
      setError('Missing secret key. Please set ENCORADA_SECRET_KEY in your .env.local file.');
      return;
    }

    initialize(key)
      .then(success => {
        if (success) {
          setIsInitialized(true);
        } else {
          setError('Failed to initialize Encorada');
        }
      })
      .catch(err => {
        console.error('Encorada initialization error:', err);
        setError(\`Error initializing Encorada: \${err.message}\`);
      });
  }, []);

  const contextValue: EncoradaContextType = {
    isInitialized,
    error,
    setVariable,
    getVariable,
    removeVariable,
    variableExists,
    clearVariables
  };

  return (
    <EncoradaContext.Provider value={contextValue}>
      {children}
    </EncoradaContext.Provider>
  );
}

export function useEncorada() {
  const context = useContext(EncoradaContext);
  
  if (!context) {
    throw new Error('useEncorada must be used within an EncoradaProvider');
  }
  
  return context;
}`}
                    description="Create the Encorada provider for your application"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">2. Add to Root Layout</h3>
                  <CodeBlock
                    language="typescript"
                    filename="app/layout.tsx"
                    code={`import { EncoradaProvider } from '@/lib/encorada/EncoradaProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EncoradaProvider>
          {children}
        </EncoradaProvider>
      </body>
    </html>
  );
}`}
                    description="Wrap your app with the EncoradaProvider"
                  />
                </div>
              </div>
            </section>

            {/* API Reference */}
            <section id="api-reference" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Key className="text-purple-400" size={28} />
                API Reference
              </h2>

              <div className="space-y-8">
                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-purple-100 flex items-center gap-2">
                      <FileText className="text-purple-400" size={20} />
                      setVariable()
                    </CardTitle>
                    <CardDescription>Store data securely with optional expiration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      language="typescript"
                      code={`// Store single variable
await setVariable('key', 'value');

// Store with expiration (5 minutes)
await setVariable('key', 'value', 300000);

// Store multiple variables
await setVariable({
  'user-id': '123',
  'user-email': 'user@example.com'
});

// Store multiple with expiration
await setVariable({
  'temp-token': 'xyz789',
  'temp-data': 'some-data'
}, undefined, 3600000); // 1 hour`}
                    />
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-purple-100 flex items-center gap-2">
                      <FileText className="text-purple-400" size={20} />
                      getVariable()
                    </CardTitle>
                    <CardDescription>Retrieve and decrypt stored data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      language="typescript"
                      code={`// Get single variable
const value = await getVariable('key');

// Get multiple variables
const values = await getVariable(['key1', 'key2']);
console.log(values['key1']); // Access individual values

// Get JSON data
const settingsJson = await getVariable('app-settings');
const settings = settingsJson ? JSON.parse(settingsJson) : {};`}
                    />
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-purple-100 flex items-center gap-2">
                      <FileText className="text-purple-400" size={20} />
                      Other Functions
                    </CardTitle>
                    <CardDescription>Additional utility functions for data management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      language="typescript"
                      code={`// Check if variable exists
const exists = await variableExists('key');

// Remove variable
await removeVariable('key');

// Clear all variables
await clearVariables();

// Clear all except specified
await clearVariables(['keep-this-key']);`}
                    />
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Examples */}
            <section id="examples" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="text-purple-400" size={28} />
                Examples
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Simple Data Storage</h3>
                  <CodeBlock
                    language="typescript"
                    code={`'use client';

import { useState } from 'react';
import { useEncorada } from '@/lib/encorada/EncoradaProvider';

export default function DataManager() {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const { isInitialized, setVariable, getVariable } = useEncorada();

  const handleSave = async () => {
    if (!isInitialized || !inputValue) return;
    
    const success = await setVariable('my-data', inputValue);
    if (success) {
      setInputValue('');
      // Refresh displayed value
      const value = await getVariable('my-data');
      setStoredValue(value);
    }
  };

  const handleLoad = async () => {
    if (!isInitialized) return;
    const value = await getVariable('my-data');
    setStoredValue(value);
  };

  return (
    <div className="space-y-4">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter data to store"
          className="w-full p-2 border rounded"
        />
        <button onClick={handleSave} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Save Securely
        </button>
      </div>
      
      <div>
        <button onClick={handleLoad} className="px-4 py-2 bg-green-500 text-white rounded">
          Load Data
        </button>
        {storedValue && (
          <p className="mt-2 p-2 bg-gray-100 rounded">
            Stored: {storedValue}
          </p>
        )}
      </div>
    </div>
  );
}`}
                    title="Simple Data Storage Component"
                    description="A basic component demonstrating secure data storage and retrieval"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">User Preferences</h3>
                  <CodeBlock
                    language="typescript"
                    code={`'use client';

import { useState, useEffect } from 'react';
import { useEncorada } from '@/lib/encorada/EncoradaProvider';

type UserPrefs = {
  theme: 'light' | 'dark';
  notifications: boolean;
  language: string;
};

export default function UserPreferences() {
  const [prefs, setPrefs] = useState<UserPrefs>({ 
    theme: 'light', 
    notifications: true, 
    language: 'en' 
  });
  const [loading, setLoading] = useState(true);
  const { isInitialized, getVariable, setVariable } = useEncorada();

  // Load preferences on mount
  useEffect(() => {
    async function loadPrefs() {
      if (!isInitialized) return;
      
      const saved = await getVariable('user-preferences');
      if (saved) {
        setPrefs(JSON.parse(saved));
      }
      setLoading(false);
    }
    loadPrefs();
  }, [isInitialized, getVariable]);

  // Save preferences when they change
  const updatePrefs = async (newPrefs: Partial<UserPrefs>) => {
    const updated = { ...prefs, ...newPrefs };
    setPrefs(updated);
    await setVariable('user-preferences', JSON.stringify(updated));
  };

  if (loading) return <div>Loading preferences...</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">User Preferences</h2>
      
      <div>
        <label className="block">
          Theme:
          <select 
            value={prefs.theme} 
            onChange={(e) => updatePrefs({ theme: e.target.value as 'light' | 'dark' })}
            className="ml-2 p-1 border rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={prefs.notifications}
            onChange={(e) => updatePrefs({ notifications: e.target.checked })}
            className="mr-2"
          />
          Enable Notifications
        </label>
      </div>
      
      <div>
        <label className="block">
          Language:
          <select 
            value={prefs.language} 
            onChange={(e) => updatePrefs({ language: e.target.value })}
            className="ml-2 p-1 border rounded"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </div>
    </div>
  );
}`}
                    title="User Preferences Manager"
                    description="Managing complex user preferences with automatic persistence"
                  />
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="text-purple-400" size={28} />
                Common Use Cases
              </h2>

              <div className="space-y-8">
                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-purple-100">Authentication Tokens</CardTitle>
                    <CardDescription>Securely store authentication tokens with automatic expiration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      language="typescript"
                      code={`// Login function
async function handleLogin(credentials: { email: string; password: string }) {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  
  const data = await response.json();
  
  if (data.token) {
    // Store token with 1 hour expiration
    await setVariable('auth-token', data.token, 3600000);
    await setVariable('user-info', JSON.stringify(data.user));
    router.push('/dashboard');
  }
}

// Check authentication
async function isAuthenticated() {
  return await variableExists('auth-token');
}

// Logout
async function handleLogout() {
  await clearVariables(['user-preferences']); // Keep preferences
  router.push('/login');
}`}
                    />
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-purple-100">Form State Persistence</CardTitle>
                    <CardDescription>Save form data to prevent loss during navigation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      language="typescript"
                      code={`'use client';

import { useEffect, useState } from 'react';
import { useEncorada } from '@/lib/encorada/EncoradaProvider';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { isInitialized, getVariable, setVariable, removeVariable } = useEncorada();
  
  // Load saved form data on mount
  useEffect(() => {
    async function loadSavedForm() {
      if (!isInitialized) return;
      
      const savedForm = await getVariable('contact-form');
      if (savedForm) {
        setFormData(JSON.parse(savedForm));
      }
    }
    loadSavedForm();
  }, [isInitialized, getVariable]);
  
  // Save form data on change
  useEffect(() => {
    const saveForm = async () => {
      if (formData.name || formData.email || formData.message) {
        // Save with 24 hour expiration
        await setVariable('contact-form', JSON.stringify(formData), 86400000);
      }
    };
    saveForm();
  }, [formData, setVariable]);
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Submit form data
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      // Clear saved form after successful submission
      await removeVariable('contact-form');
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        className="w-full p-2 border rounded h-32"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Send Message
      </button>
    </form>
  );
}`}
                    />
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="text-purple-400" size={28} />
                Security Considerations
              </h2>

              <div className="space-y-6">
                <Alert className="bg-yellow-500/10 border-yellow-500/20">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-yellow-300">
                    <strong>Important:</strong> While Encorada provides strong encryption, follow these security best
                    practices for optimal protection.
                  </AlertDescription>
                </Alert>

                <div className="grid gap-6">
                  <Card className="bg-slate-800/50 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-green-300 flex items-center gap-2">
                        <Key className="text-green-400" size={20} />
                        Environment Variables
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-slate-300 space-y-2">
                        <li>
                          • Keep your <code className="bg-slate-700 px-1 rounded">ENCORADA_SECRET_KEY</code> secure
                        </li>
                        <li>• Never expose it in client-side code</li>
                        <li>• Use different keys for different environments</li>
                        <li>• Consider implementing key rotation for production</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-blue-300 flex items-center gap-2">
                        <Globe className="text-blue-400" size={20} />
                        HTTPS Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Encorada requires a secure context (HTTPS) to work</li>
                        <li>• Works on localhost for development</li>
                        <li>• Always use HTTPS in production</li>
                        <li>• Modern browsers enforce this requirement</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-purple-300 flex items-center gap-2">
                        <Clock className="text-purple-400" size={20} />
                        Data Expiration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Use appropriate TTL values for sensitive data</li>
                        <li>• Shorter expiration times reduce exposure risk</li>
                        <li>• Consider automatic cleanup for expired data</li>
                        <li>• Balance security with user experience</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="text-purple-400" size={28} />
                Troubleshooting
              </h2>

              <div className="space-y-6">
                <Alert className="bg-red-500/10 border-red-500/20">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-red-300">
                    <strong>❌ {`Missing secret key`} Error</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Check that .env.local file exists</li>
                      <li>• Verify ENCORADA_SECRET_KEY is set</li>
                      <li>• Restart your development server</li>
                      <li>• Ensure next.config.js exposes the variable</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <Alert className="bg-yellow-500/10 border-yellow-500/20">
                  <AlertDescription className="text-yellow-300">
                    <strong>⚠️ {`Secure context required`} Error</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Use localhost for development</li>
                      <li>• Use HTTPS in production</li>
                      <li>• Check browser security settings</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <Alert className="bg-blue-500/10 border-blue-500/20">
                  <AlertDescription className="text-blue-300">
                    <strong>ℹ️ Data not persisting</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Check TTL values {"aren't"} too short</li>
                      <li>• Verify the same secret key is used</li>
                      <li>• Check browser privacy/incognito settings</li>
                      <li>• Ensure localStorage is available</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <Alert className="bg-purple-500/10 border-purple-500/20">
                  <AlertDescription className="text-purple-300">
                    <strong>🔧 Provider not working</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Ensure EncoradaProvider wraps your components</li>
                      <li>• Check that useEncorada is called inside the provider</li>
                      <li>• Verify isInitialized is true before using functions</li>
                      <li>• Check for initialization errors in console</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
