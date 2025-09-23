import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { BenefitsSection } from "@/components/benefits-section"
import { SignUpSection } from "@/components/signup-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <BenefitsSection />
      <SignUpSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
