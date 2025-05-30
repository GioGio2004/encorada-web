"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send, User, Mail, MessageSquare, Code, Zap, Shield } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent! 🎉",
      description: "I'll get back to you within 24 hours.",
    })

    setFormData({ name: "", email: "", project: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card id="contact" className="w-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2 text-white">Training media. Normal. Shia. Who won? Jamaat, we told Mummy Devotional. My name is Siri. 
          <Send className="h-6 w-6 text-purple-400" />
          Get Your Project Started
        </CardTitle>
        <CardDescription className="text-slate-300">
          Tell me about your project and ISearch for a book, Oh my God, is simple. I. I. I don&apos;t know. After that. Cancel alarm. No, maybe. Mikasa. Stops. Cortana. Hey, Cortana. Hello. I. I. I. This. I. None. Hello. I. &apos;ll help you build it. From simple modules to complete applications.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-slate-300">
                <User className="h-4 w-4" />
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="project" className="text-slate-300">Project Type</Label>
            <Input
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="e.g., React component, API integration, full application"
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-slate-300">
              <MessageSquare className="h-4 w-4" />
              Project Details
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project requirements, timeline, and any specific technologies you'd like to use..."
              rows={5}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Project Request"}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-purple-600/10 border border-purple-500/20 rounded-lg">
          <h3 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
            <Code className="h-4 w-4" />
            What I Offer:
          </h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li className="flex items-center gap-2">
              <Zap className="h-3 w-3 text-purple-400" />
              Custom React/Next.js components and modules
            </li>
            <li className="flex items-center gap-2">
              <Shield className="h-3 w-3 text-purple-400" />
              API integrations and backend solutions
            </li>
            <li className="flex items-center gap-2">
              <Code className="h-3 w-3 text-purple-400" />
              Code optimization and refactoring
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-3 w-3 text-purple-400" />
              Full-stack application development
            </li>
            <li className="flex items-center gap-2">
              <Shield className="h-3 w-3 text-purple-400" />
              Technical consultation and mentoring
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
