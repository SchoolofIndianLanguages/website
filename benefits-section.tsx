import { Route as Roots, Brain, Globe2, TrendingUp, Heart, Users } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Roots,
      title: "Connect with Cultural Roots",
      description: "Deepen your understanding of Indian heritage and traditions through language",
      stat: "95%",
      statLabel: "feel more connected",
    },
    {
      icon: Brain,
      title: "Smart Learning with AI",
      description: "Personalized learning experiences powered by cutting-edge technology",
      stat: "3x",
      statLabel: "faster progress",
    },
    {
      icon: Globe2,
      title: "Global Community",
      description: "Join learners from around the world in celebrating Indian languages",
      stat: "50+",
      statLabel: "countries represented",
    },
    {
      icon: TrendingUp,
      title: "Proven Impact",
      description: "Measurable results with structured learning paths and progress tracking",
      stat: "90%",
      statLabel: "achieve fluency goals",
    },
    {
      icon: Heart,
      title: "Passionate Community",
      description: "Learn alongside dedicated students and experienced native speakers",
      stat: "4.9/5",
      statLabel: "community rating",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Practice with peers through group projects and cultural exchanges",
      stat: "85%",
      statLabel: "continue learning",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">Why Choose SOIL?</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Join thousands of learners who have discovered the joy of Indian languages through our innovative and
            culturally-rich approach to education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-background relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-6 relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                </div>

                {/* Stat highlight */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{benefit.stat}</span>
                    <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Join our community of passionate learners today!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
