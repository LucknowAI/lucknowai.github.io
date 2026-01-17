import { BookOpen, Beaker, Code, Rocket, Target, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Education and Knowledge Sharing",
    description:
      "Facilitating AI education programs in Tier 3 cities and villages across Uttar Pradesh, making AI accessible to all.",
  },
  {
    icon: Beaker,
    title: "Promoting AI & ML Research",
    description:
      "Pioneering AI research to explore new horizons and push the boundaries of the field in Lucknow.",
  },
  {
    icon: Code,
    title: "Active Engagement in Open Source",
    description:
      "Actively contributing to the open-source AI community, fostering innovation and accessibility.",
  },
  {
    icon: Rocket,
    title: "Supporting Startup Ventures",
    description:
      "Nurturing AI-driven startups by providing vital support, mentorship, and resources.",
  },
  {
    icon: Target,
    title: "Solving Local Challenges with AI",
    description:
      "With the power of AI innovation, we strive to make a impactful solution for our local challenges.",
  },
  {
    icon: BarChart3,
    title: "अवधी NLP and Data Advancement",
    description:
      "Advancing अवधी Natural Language Processing and data-driven initiatives to empower the Hindi and low-resource languages.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-8 py-8">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        <span className="text-muted-foreground">Empower</span>{" "}
        <span className="text-foreground">the idea of</span>{" "}
        <span className="text-primary">AI</span>{" "}
        <span className="text-foreground">and knowledge sharing</span>
        <br />
        <span className="text-foreground">throughout</span>{" "}
        <span className="text-primary">Lucknow</span>
      </h2>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="flex items-start gap-3">
              <feature.icon className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
