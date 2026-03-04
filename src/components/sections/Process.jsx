import { Search, Lightbulb, Settings, Users, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We analyze your restaurant operations, brand positioning, and growth opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We create a tailored strategy to optimize operations, marketing, and revenue streams.",
  },
  {
    icon: Settings,
    title: "Implementation",
    description:
      "We guide your team through operational improvements and system implementation.",
  },
  {
    icon: Users,
    title: "Team Development",
    description:
      "Leadership training and staff development ensure consistent service excellence.",
  },
  {
    icon: TrendingUp,
    title: "Growth Optimization",
    description:
      "We continuously refine strategies to increase profitability and long-term success.",
  },
];

function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent uppercase tracking-widest text-sm mb-3">
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            A Proven Framework for
            <span className="block text-accent">Restaurant Success</span>
          </h2>

          <p className="text-white/70">
            Our consulting process is designed to identify opportunities,
            implement strategic improvements, and build sustainable growth for
            restaurant businesses.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-white/10"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="relative text-center group">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition duration-300">
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
