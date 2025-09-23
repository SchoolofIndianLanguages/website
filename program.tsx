"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Palette, Users, ChevronDown, ChevronUp } from "lucide-react"

export function ProgramsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const programs = [
    {
      icon: MessageSquare,
      title: "Conversational Classes",
      badge: "Popular" as const,
      shortDescription: "Interactive online language sessions with native speakers",
      fullDescription:
        "Our conversational classes are designed to get you speaking from day one. Led by native speakers and experienced instructors, these online sessions focus on practical communication skills, pronunciation, and cultural context. Classes are available for beginners to advanced learners across 10+ Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, and more.",
      features: [
        "Small group online sessions (5-8 students)",
        "Native speaker instructors",
        "Cultural context integration",
        "Flexible scheduling across time zones",
        "Progress tracking",
      ],
    },
    {
      icon: Palette,
      title: "Cultural Workshops",
      badge: "Immersive" as const,
      shortDescription: "Deep dive into Indian traditions, festivals, and customs",
      fullDescription:
        "Our cultural workshops provide immersive online experiences that go beyond language learning. Explore Indian festivals, traditional arts, cooking, music, and dance through virtual sessions. These interactive workshops help you understand the cultural context behind the language, making your learning journey more meaningful and memorable.",
      features: [
        "Virtual festival celebrations",
        "Traditional arts & crafts tutorials",
        "Online cooking workshops",
        "Music & dance sessions",
        "Historical context exploration",
      ],
    },
    {
      icon: Users,
      title: "Community Projects & Volunteer Opportunities",
      badge: "Impact" as const,
      shortDescription: "Online collaborative initiatives and volunteer support from anywhere in the US",
      fullDescription:
        "Join our community projects to practice your language skills while making a positive impact. As an online initiative based in Phoenix, Arizona, we welcome volunteers and supporters from across the United States - Chicago, Houston, and beyond! Participate in translation projects, cultural documentation, virtual community outreach, and support SOIL through remote volunteer work. Perfect for learners at any level looking to contribute meaningfully.",
      features: [
        "Remote translation projects",
        "Virtual cultural documentation",
        "Online community outreach",
        "Volunteer opportunities nationwide",
        "Flexible participation from any US location",
      ],
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Programs</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Discover our comprehensive range of online programs designed to make learning Indian languages engaging,
            effective, and culturally enriching. Join us from anywhere in the US!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group cursor-pointer border rounded-lg p-4 transition-all duration-300 hover:shadow-lg ${
                expandedIndex === index ? "ring-2 ring-primary/20 shadow-xl" : "hover:-translate-y-1"
              }`}
              onClick={() => toggleExpand(index)}
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl text-foreground group-hover:text-primary transition-colors">{program.title}</h3>
                    <Badge variant="outline" className="mt-1">
                      {program.badge}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="shrink-0">
                  {expandedIndex === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{program.shortDescription}</p>

              {expandedIndex === index && (
                <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-foreground text-pretty leading-relaxed">{program.fullDescription}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
