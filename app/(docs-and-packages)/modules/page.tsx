"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
  title: string;
  packageType: string;
  author: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  packageType,
  author,
}) => {
  return (
    <div className="group perspective-1000">
      <Link href={title === "Gallery" ? "/gallery" : "/grabPic-docs"} className="block">
        <Card className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700 hover:border-purple-500/50 transition-all duration-500 ease-out transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/20 w-80 h-64 cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

          <CardContent className="relative h-full p-6 flex flex-col justify-between z-10">
            <div className="flex justify-end">
              <Badge
                variant="secondary"
                className="bg-gray-800/80 text-gray-300 border-gray-600 group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:border-purple-400/50 transition-all duration-300 transform group-hover:scale-110"
              >
                {packageType}
              </Badge>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-cyan-400 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                {title}
              </h3>
            </div>

            <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                by{" "}
                <span className="font-medium text-gray-300 group-hover:text-white">
                  {author}
                </span>
              </p>
            </div>
          </CardContent>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
            <div className="absolute bottom-6 left-8 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-600"></div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

const ModulesPage: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"build" | "docs">("build");

  useEffect(() => {
    if (pathname === "/grabPic-docs") {
      setActiveTab("docs");
    } else {
      setActiveTab("build");
    }
  }, [pathname]);

  const handleTabClick = (tab: "build" | "docs") => {
    setActiveTab(tab);
    router.push(tab === "build" ? "/gallery" : "/grabPic-docs");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <header className="relative z-50 border-b border-gray-800/50 backdrop-blur-xl bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-xl font-bold transition-colors duration-300">
                <span className="text-white group-hover:text-purple-400">&lt;/&gt;</span>
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  redevblock
                </span>
              </div>
            </Link>

            <nav className="flex items-center space-x-8">
              <button
                onClick={() => handleTabClick("build")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "build"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-400/50"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                What it can build
              </button>
              <button
                onClick={() => handleTabClick("docs")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "docs"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-400/50"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                Docs
              </button>
            </nav>

            <div></div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-6 animate-gradient-x">
            {activeTab === "build" ? "Explore Modules" : "Documentation"}
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            {activeTab === "build"
              ? "Discover and integrate powerful React components and NPM packages crafted by our community"
              : "Learn how to use and implement our modules with detailed documentation and examples"}
          </p>
        </div>

        <div className="flex justify-center animate-slide-up">
          <div className="animate-float">
            {activeTab === "build" ? (
              <ModuleCard
                title="Gallery"
                packageType="npm-package"
                author="giorgi khvichia"
              />
            ) : (
              <ModuleCard
                title="grabPic - docs"
                packageType="documentation"
                author="giorgi khvichia"
              />
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
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
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default ModulesPage;
