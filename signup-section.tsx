"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { UserPlus, Mail, User, CheckCircle } from "lucide-react"

export function SignUpSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName.trim() || !formData.email.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required to sign up.",
        variant: "destructive",
      })
      return
    }

    if (!formData.email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const signupData = {
        fullName: formData.fullName,
        email: formData.email,
        timestamp: new Date().toISOString(),
        sendTo: "nidhishatayi@gmail.com",
      }

      console.log("[v0] Signup data:", signupData)

      setTimeout(() => {
        toast({
          title: "Welcome to SOIL! 🎉",
          description: `Thank you ${formData.fullName}! We've received your signup and will contact you soon.`,
        })

        setFormData({ fullName: "", email: "" })
        setIsSubmitting(false)
      }, 1500)
    } catch (error) {
      console.error("[v0] Signup error:", error)
      toast({
        title: "Signup failed",
        description: "There was an error processing your signup. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <section id="signup" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Ready to start your journey with Indian languages and culture? Sign up today and we'll send you information
            about our programs and upcoming classes.
          </p>
        </div>

        <div className="max-w-md mx-auto border border-border/50 shadow-lg rounded-lg p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl text-foreground font-semibold">Get Started Today</h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full"
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                  Signing Up...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Sign Up for SOIL
                </div>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground text-pretty">
              By signing up, you'll receive updates about our programs, cultural events, and language learning resources.
              We respect your privacy and won't spam you.
            </p>
          </div>
        </div>

        {/* Additional benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Program Updates</h3>
            <p className="text-sm text-muted-foreground">Get notified about new classes and workshops</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <UserPlus className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Community Access</h3>
            <p className="text-sm text-muted-foreground">Join our vibrant learning community</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Free Resources</h3>
            <p className="text-sm text-muted-foreground"
