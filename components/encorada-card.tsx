"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Zap, ExternalLink, Github, Package, FolderArchive, FolderCheck } from "lucide-react"
import Link from "next/link"

export default function EncoradaCard() {
  return (
    <Card
      id="modules"
      className="w-full bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-all duration-200"
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-600 to-green-800 shadow-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-xl text-white">Encorada</CardTitle>
          </div>
          <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
            <Package className="w-3 h-3 mr-1" />
            NPM Package
          </Badge>
        </div>
        <CardDescription className="text-slate-300">
          Encrypted local storage for React applications with TypeScript support
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Lock className="h-3 w-3 text-green-400" />
            <span>AES-256</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Zap className="h-3 w-3 text-blue-400" />
            <span>Fast Cache</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Shield className="h-3 w-3 text-purple-400" />
            <span>Secure</span>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          A production-ready npm package for secure variable storage with military-grade encryption, automatic TTL, and
          seamless React integration.
        </p>

        <div className="flex gap-2">
          
          <Link href={"/encorada"} >
          <Button size="sm" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
            <FolderCheck className="h-4 w-4" />
            Try Demo
          </Button>
          </Link>
        </div>

        <div className="pt-3 border-t border-slate-700/50">
          <p className="text-xs text-slate-400 flex items-center gap-2">
            <span className="text-purple-400">💡</span>
            This is an example of the custom modules I can build for your project
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
