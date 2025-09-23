"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar, MapPin, Clock, Users } from "lucide-react"

export function ContactSection() {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get in Touch</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Ready to start your language learning journey? We're here to help you every step of the way. Contact us to
            learn more about our programs or schedule your first conversational class.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="border-border/50 hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-3">
                    Send us your questions or inquiries about our programs
                  </p>
                  <a
                    href="mailto:nidhishatayi@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    nidhishatayi@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="border-border/50 hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-3">
                    Speak directly with our team about classes and schedules
                  </p>
                  <a
                    href="tel:+14806399533"
                    className="text-secondary hover:text-secondary/80 font-medium transition-colors"
                  >
                    (480) 639-9533
                  </a>
                </div>
              </div>
            </div>

            <div className="border-border/50 hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Schedule a Class</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to start learning? Book your first conversational class today
                  </p>
                  <Button onClick={scrollToSignup} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Schedule a Conversational Class
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <
