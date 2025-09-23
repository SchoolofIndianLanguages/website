import { BookOpen, Users, Zap, Heart, Globe, Award } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Conversational Classes",
      description: "Interactive language sessions focused on practical communication skills",
    },
    {
      icon: Zap,
      title: "AI-Driven Practice Tools",
      description: "Smart learning platforms that adapt to your pace and learning style",
    },
    {
      icon: Users,
      title: "Cultural Workshops",
      description: "Immersive experiences exploring Indian traditions, festivals, and customs",
    },
    {
      icon: Heart,
      title: "Community Projects",
      description: "Collaborative initiatives that bring learners together for real-world impact",
    },
    {
      icon: Globe,
      title: "Volunteer Opportunities",
      description: "Give back to the community while practicing your language skills",
    },
    {
      icon: Award,
      title: "Cultural Certification",
      description: "Recognized achievements in language proficiency and cultural understanding",
    },
  ]

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
            About SOIL
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
            SOIL (School of Indian Language) is a passionate student-led initiative dedicated to preserving, promoting,
            and celebrating the rich linguistic heritage of India. Founded with the vision of making Indian languages
            accessible to everyone, we combine traditional teaching methods with cutting-edge AI technology to create an
            engaging and effective learning experience.
          </p>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our mission is to bridge cultural gaps, foster understanding, and create a global community of learners who
            appreciate the beauty and diversity of Indian languages and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background rounded-lg p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

