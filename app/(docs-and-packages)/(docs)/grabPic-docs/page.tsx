"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GrabPictureDocsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('installation');

  const sections = [
    { id: 'installation', title: 'Installation' },
    { id: 'quick-start', title: 'Quick Start' },
    { id: 'api-reference', title: 'API Reference' },
    { id: 'examples', title: 'Examples' },
    { id: 'environment', title: 'Environment Setup' }
  ];

  const codeSnippets = {
    installation: `npm install grab-picture`,
    basicUsage: `import grabPic from 'grab-picture';

// Simple image search
const result = await grabPic('mountains', 'YOUR_UNSPLASH_ACCESS_KEY');

// Get the first image
const imageUrl = result.one();
console.log(imageUrl);`,
    withOptions: `// Advanced search with options
const pics = await grabPic("dogs", YOUR_ACCESS_KEY, {
  count: 10,
  orientation: 'landscape',
  size: 'small'
});

console.log(pics.all()); // Array of 10 landscape dog images`,
    nextjsExample: `// app/api/random-image/route.ts
import { grabPic } from "grab-picture";

export async function GET() {
  try {
    const pics = await grabPic("nature", process.env.UNSPLASH_ACCESS_KEY!);
    return Response.json({ imageUrl: pics.random() });
  } catch (error) {
    return Response.json({ error: "Failed to fetch image" }, { status: 500 });
  }
}`,
    errorHandling: `try {
  const pics = await grabPic("cats", YOUR_ACCESS_KEY);
  console.log(pics.all());
} catch (error) {
  if (error.message.includes("Invalid Unsplash access key")) {
    console.error("Check your API key");
  } else if (error.message.includes("No images found")) {
    console.error("Try a different search term");
  } else {
    console.error("Failed to fetch images:", error.message);
  }
}`
  };

  const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language = 'javascript' }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <pre className="relative bg-gray-900/80 border border-gray-700 rounded-lg p-4 overflow-x-auto text-sm backdrop-blur-sm">
        <code className="text-gray-100">{code}</code>
      </pre>
    </div>
  );

  const ParameterTable: React.FC = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left p-3 text-purple-400">Parameter</th>
            <th className="text-left p-3 text-purple-400">Type</th>
            <th className="text-left p-3 text-purple-400">Required</th>
            <th className="text-left p-3 text-purple-400">Description</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          <tr className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
            <td className="p-3 font-mono text-cyan-400">query</td>
            <td className="p-3">string</td>
            <td className="p-3"><Badge className="bg-green-500/20 text-green-400 border-green-500/30">✅</Badge></td>
            <td className="p-3">Search term for images</td>
          </tr>
          <tr className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
            <td className="p-3 font-mono text-cyan-400">accessKey</td>
            <td className="p-3">string</td>
            <td className="p-3"><Badge className="bg-green-500/20 text-green-400 border-green-500/30">✅</Badge></td>
            <td className="p-3">Your Unsplash API access key</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const OptionsTable: React.FC = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left p-3 text-purple-400">Option</th>
            <th className="text-left p-3 text-purple-400">Type</th>
            <th className="text-left p-3 text-purple-400">Default</th>
            <th className="text-left p-3 text-purple-400">Description</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          <tr className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
            <td className="p-3 font-mono text-cyan-400">count</td>
            <td className="p-3">number</td>
            <td className="p-3 font-mono text-yellow-400">5</td>
            <td className="p-3">Number of images to fetch (1-30)</td>
          </tr>
          <tr className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
            <td className="p-3 font-mono text-cyan-400">orientation</td>
            <td className="p-3">string</td>
            <td className="p-3 font-mono text-yellow-400">"landscape"</td>
            <td className="p-3">Image orientation: "landscape", "portrait", "squarish"</td>
          </tr>
          <tr className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
            <td className="p-3 font-mono text-cyan-400">size</td>
            <td className="p-3">string</td>
            <td className="p-3 font-mono text-yellow-400">"regular"</td>
            <td className="p-3">Image size: "raw", "full", "regular", "small", "thumb"</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const MethodsList: React.FC = () => (
    <div className="grid gap-3">
      {[
        { method: 'one()', desc: 'Returns the first image URL' },
        { method: 'two()', desc: 'Returns the second image URL' },
        { method: 'three()', desc: 'Returns the third image URL' },
        { method: 'four()', desc: 'Returns the fourth image URL' },
        { method: 'five()', desc: 'Returns the fifth image URL' },
        { method: 'all()', desc: 'Returns array of all image URLs' },
        { method: 'random()', desc: 'Returns a random image URL from the results' }
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors group">
          <code className="text-cyan-400 font-mono group-hover:text-cyan-300">{item.method}</code>
          <span className="text-gray-400 group-hover:text-gray-300">{item.desc}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50 backdrop-blur-xl bg-black/50  top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-xl font-bold transition-colors duration-300">
                <span className="text-white group-hover:text-purple-400">&lt;/&gt;</span> 
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">redevblock</span>
              </div>
            </Link>
            
            <nav className="flex items-center space-x-8">
              <Link href="/modules" className="text-gray-300 hover:text-white transition-colors duration-300">Modules</Link>
              <a href="https://www.npmjs.com/package/grab-picture" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-300 hover:text-red-400 transition-colors duration-300">
                <span>NPM</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </a>
              <a href="https://github.com/GioGio2004/grab-pic" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-purple-500/20 text-purple-400 border-l-2 border-purple-400'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <div className="text-center py-16 animate-fade-in">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
                  grab-picture
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                The simplest way to fetch beautiful images from Unsplash in your JavaScript/TypeScript projects. 
                Get high-quality images with just one line of code!
              </p>
              <div className="flex justify-center space-x-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
                  Latest: v1.0.0
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2">
                  TypeScript Ready
                </Badge>
              </div>
            </div>

            {/* Installation */}
            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                  📦 Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock code={codeSnippets.installation} language="bash" />
              </CardContent>
            </Card>

            {/* Quick Start */}
            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                  🚀 Quick Start
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">1. Get Your Unsplash Access Key</h4>
                  <div className="text-gray-300 space-y-2">
                    <p>1. Go to <a href="https://unsplash.com/developers" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Unsplash Developers</a></p>
                    <p>2. Create a new application</p>
                    <p>3. Copy your Access Key</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">2. Basic Usage</h4>
                  <CodeBlock code={codeSnippets.basicUsage} />
                </div>
              </CardContent>
            </Card>

            {/* API Reference */}
            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                  📖 API Reference
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Function Signature</h4>
                  <CodeBlock code="grabPic(query, accessKey, options?)" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Parameters</h4>
                  <ParameterTable />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Options</h4>
                  <OptionsTable />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Return Methods</h4>
                  <MethodsList />
                </div>
              </CardContent>
            </Card>

            {/* Examples */}
            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                  💡 Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">With Options</h4>
                  <CodeBlock code={codeSnippets.withOptions} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Next.js API Route</h4>
                  <CodeBlock code={codeSnippets.nextjsExample} language="typescript" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Error Handling</h4>
                  <CodeBlock code={codeSnippets.errorHandling} />
                </div>
              </CardContent>
            </Card>

            {/* Environment Setup */}
            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                  ⚙️ Environment Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock code="# .env.local\nUNSPLASH_ACCESS_KEY=your_access_key_here" language="bash" />
              </CardContent>
            </Card>

            {/* Footer */}
            <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30">
              <CardContent className="text-center py-8">
                <p className="text-gray-300 mb-4">Created by <span className="text-purple-400 font-semibold">giorgi khvichia</span></p>
                <div className="flex justify-center space-x-6">
                  <a href="https://www.npmjs.com/package/grab-picture" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">
                    NPM Package
                  </a>
                  <a href="https://github.com/GioGio2004/grab-pic" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    GitHub Repository
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GrabPictureDocsPage;