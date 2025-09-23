import { Heart, Globe, Users, BookOpen } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">SOIL</h3>
                <p className="text-sm text-muted-foreground">School of Indian Language</p>
              </div>
            </div>
            <p className="text-muted-foreground text-pretty leading-relaxed mb-4 max-w-md">
              A student-led initiative promoting Indian languages and culture through interactive learning, AI-powered
              tools, and vibrant community workshops.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Global Community</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>500+ Students</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About SOIL
                </a>
              </li>
              <li>
                <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#chatbot" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Assistant
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <a href="mailto:nidhishatayi@gmail.com" className="hover:text-primary transition-colors">
                  nidhishatayi@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+14806399533" className="hover:text-primary transition-colors">
                  (480) 639-9533
                </a>
              </p>
              <p className="text-muted-foreground text-sm">Arizona, USA</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} SOIL - School of Indian Language. Made with{" "}
              <Heart className="w-4 h-4 inline text-red-500" /> for language learners worldwide.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Student-Led Initiative</span>
              <span>•</span>
              <span>Cultural Preservation</span>
              <span>•</span>
              <span>AI-Powered Learning</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
