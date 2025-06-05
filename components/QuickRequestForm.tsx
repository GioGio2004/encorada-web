"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { useUser, useAuth, SignInButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle, AlertCircle, LogIn, Shield } from "lucide-react"

// TypeScript interfaces
interface FormData {
  name: string
  lastname: string
  email: string
  problem: string
  description: string
}

interface FormErrors {
  [key: string]: string[]
}

interface ApiResponse {
  success: boolean
  message?: string
  errors?: FormErrors
}

const STORAGE_KEY = "pending_form_submission"

const problemTypes = [
  { value: "technical", label: "Technical Issue" },
  { value: "billing", label: "Billing Problem" },
  { value: "account", label: "Account Access" },
  { value: "feature", label: "Feature Request" },
  { value: "bug", label: "Bug Report" },
  { value: "other", label: "Other" },
]

const initialFormState: FormData = {
  name: "",
  lastname: "",
  email: "",
  problem: "",
  description: "",
}

export default function LandingForm() {
  const { isSignedIn, user, isLoaded } = useUser()
  const { signOut } = useAuth()

  const [form, setForm] = useState<FormData>(initialFormState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [apiError, setApiError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAuthPrompt, setShowAuthPrompt] = useState(false)

  // Load saved form data on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem(STORAGE_KEY)
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData)
          setForm(parsedData)
        } catch (error) {
          console.error("Error parsing saved form data:", error)
          localStorage.removeItem(STORAGE_KEY)
        }
      }
    }
  }, [])

  // Auto-submit after successful authentication
  useEffect(() => {
    if (isSignedIn && isLoaded) {
      const savedData = localStorage.getItem(STORAGE_KEY)
      if (savedData) {
        // Auto-submit the form after successful sign-in
        handleFormSubmission()
      }
    }
  }, [isSignedIn, isLoaded])

  // Save form data to localStorage
  const saveFormData = useCallback((formData: FormData) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    }
  }, [])

  // Clear saved form data
  const clearSavedData = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  // Client-side validation
  const validateField = useCallback((name: keyof FormData, value: string): string[] => {
    const fieldErrors: string[] = []

    switch (name) {
      case "name":
      case "lastname":
        if (!value.trim()) fieldErrors.push(`${name === "name" ? "Name" : "Last name"} is required`)
        if (value.length > 50)
          fieldErrors.push(`${name === "name" ? "Name" : "Last name"} must be less than 50 characters`)
        if (!/^[a-zA-Z\s'-]+$/.test(value))
          fieldErrors.push(`${name === "name" ? "Name" : "Last name"} contains invalid characters`)
        break
      case "email":
        if (!value.trim()) fieldErrors.push("Email is required")
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) fieldErrors.push("Invalid email format")
        if (value.length > 100) fieldErrors.push("Email too long")
        break
      case "problem":
        if (!value.trim()) fieldErrors.push("Problem type is required")
        break
      case "description":
        if (!value.trim()) fieldErrors.push("Description is required")
        if (value.length < 10) fieldErrors.push("Description must be at least 10 characters")
        if (value.length > 2000) fieldErrors.push("Description must be less than 2000 characters")
        break
    }

    return fieldErrors
  }, [])

  const validateForm = useCallback((): FormErrors => {
    const formErrors: FormErrors = {}

    Object.entries(form).forEach(([key, value]) => {
      const fieldErrors = validateField(key as keyof FormData, value)
      if (fieldErrors.length > 0) {
        formErrors[key] = fieldErrors
      }
    })

    return formErrors
  }, [form, validateField])

  const handleInputChange = useCallback(
    (field: keyof FormData, value: string) => {
      const newForm = { ...form, [field]: value }
      setForm(newForm)
      saveFormData(newForm)

      // Clear field-specific errors on change
      if (errors[field]) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[field]
          return newErrors
        })
      }

      // Clear general states
      if (apiError) setApiError("")
      if (success) setSuccess(false)
    },
    [form, errors, apiError, success, saveFormData],
  )

  const handleFormSubmission = async () => {
    setIsSubmitting(true)
    setApiError("")
    setSuccess(false)

    // Validate form
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data: ApiResponse = await response.json()

      if (!data.success) {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          setApiError(data.message || "Submission failed")
        }
        return
      }

      setSuccess(true)
      setForm(initialFormState)
      setErrors({})
      clearSavedData()
      setShowAuthPrompt(false)
    } catch (error) {
      console.error("Submission error:", error)
      setApiError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate form first
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    if (!isSignedIn) {
      // Save form data and show auth prompt
      saveFormData(form)
      setShowAuthPrompt(true)
      return
    }

    // User is signed in, submit directly
    await handleFormSubmission()
  }

  const handleSignOut = async () => {
    await signOut()
    clearSavedData()
    setForm(initialFormState)
    setSuccess(false)
    setShowAuthPrompt(false)
  }

  // Loading state
  if (!isLoaded) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6 text-center">
          <Loader2 className="h-6 w-6 animate-spin mx-auto" />
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Submit Your Problem</CardTitle>
        <CardDescription>
          {isSignedIn
            ? `Welcome back, ${user?.firstName || "User"}! Submit your problem below.`
            : "Fill out the form below and sign in to submit your request securely."}
        </CardDescription>
        {isSignedIn && (
          <div className="flex items-center justify-center gap-2 text-sm text-green-600">
            <Shield className="h-4 w-4" />
            <span>Authenticated & Secure</span>
            <Button variant="outline" size="sm" onClick={handleSignOut} className="ml-4">
              Sign Out
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {apiError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{apiError}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Your problem has been submitted successfully! We'll get back to you soon.
              </AlertDescription>
            </Alert>
          )}

          {showAuthPrompt && !isSignedIn && (
            <Alert className="border-blue-200 bg-blue-50">
              <LogIn className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <div className="flex items-center justify-between">
                  <span>Please sign in to submit your problem securely.</span>
                  <SignInButton mode="modal">
                    <Button size="sm" className="ml-4">
                      Sign In
                    </Button>
                  </SignInButton>
                </div>
              </AlertDescription>
            </Alert>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                First Name *
              </label>
              <Input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                maxLength={50}
                disabled={isSubmitting}
                className={errors.name ? "border-red-500" : ""}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-600">
                  {errors.name.join(", ")}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="lastname" className="text-sm font-medium">
                Last Name *
              </label>
              <Input
                id="lastname"
                type="text"
                value={form.lastname}
                onChange={(e) => handleInputChange("lastname", e.target.value)}
                maxLength={50}
                disabled={isSubmitting}
                className={errors.lastname ? "border-red-500" : ""}
                aria-describedby={errors.lastname ? "lastname-error" : undefined}
              />
              {errors.lastname && (
                <p id="lastname-error" className="text-sm text-red-600">
                  {errors.lastname.join(", ")}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              maxLength={100}
              disabled={isSubmitting}
              className={errors.email ? "border-red-500" : ""}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-600">
                {errors.email.join(", ")}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="problem" className="text-sm font-medium">
              Problem Type *
            </label>
            <Select
              value={form.problem}
              onValueChange={(value) => handleInputChange("problem", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className={errors.problem ? "border-red-500" : ""}>
                <SelectValue placeholder="Select the type of problem" />
              </SelectTrigger>
              <SelectContent>
                {problemTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.problem && <p className="text-sm text-red-600">{errors.problem.join(", ")}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Problem Description * ({form.description.length}/2000)
            </label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              maxLength={2000}
              disabled={isSubmitting}
              className={`min-h-[120px] ${errors.description ? "border-red-500" : ""}`}
              placeholder="Please describe your problem in detail. Include any error messages, steps to reproduce, or relevant information that might help us assist you better."
              aria-describedby={errors.description ? "description-error" : undefined}
            />
            {errors.description && (
              <p id="description-error" className="text-sm text-red-600">
                {errors.description.join(", ")}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : !isSignedIn ? (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Sign In & Submit Problem
              </>
            ) : (
              "Submit Problem"
            )}
          </Button>

          {!isSignedIn && (
            <p className="text-sm text-center text-muted-foreground">
              Your form data will be saved while you sign in. We use secure authentication to protect your information.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
