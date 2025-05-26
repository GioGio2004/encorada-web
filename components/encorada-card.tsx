"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Zap, ExternalLink, Github } from "lucide-react"

export default function EncoradaCard() {
  return (
    <Card id="modules" className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-green-600" />
            <CardTitle className="text-xl">Encorada</CardTitle>
          </div>
          <Badge variant="secondary">NPM Package</Badge>
        </div>
        <CardDescription>Encrypted local storage for React applications with TypeScript support</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <Lock className="h-3 w-3" />
            AES-256
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <Zap className="h-3 w-3" />
            Fast Cache
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <Shield className="h-3 w-3" />
            Secure
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          A production-ready npm package for secure variable storage with military-grade encryption, automatic TTL, and
          seamless React integration.
        </p>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            View Code
          </Button>
          <Button size="sm" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            Try Demo
          </Button>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            💡 This is an example of the custom modules I can build for your project
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
