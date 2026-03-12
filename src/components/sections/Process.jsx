import { Search, Lightbulb, Settings, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative py-24 bg-gradient-to-b from-black to-[#0b0b0b] text-white overflow-hidden">
      {/* Purple Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[140px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-purple-400 uppercase tracking-widest text-sm mb-3">
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            A Proven Framework for
            <span className="block text-purple-400">Restaurant Success</span>
          </h2>

          <p className="text-white/70">
            Our consulting process identifies opportunities, implements
            strategic improvements, and builds sustainable growth for restaurant
            businesses.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center p-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-purple-400 transition">
                  <Icon size={26} className="text-purple-400" />
                </div>

                {/* Step Number */}
                <div className="text-purple-400 text-sm font-semibold mb-2">
                  Step {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
