import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Restaurant Concept Development",
    description:
      "Craft distinctive dining concepts that attract the right audience and stand out in competitive markets.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    title: "Menu Engineering",
    description:
      "Design profitable menus that guide customer choices and maximize restaurant margins.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
  },
  {
    title: "Operational Optimization",
    description:
      "Improve service flow, staffing systems, and kitchen efficiency to deliver consistent performance.",
    image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee",
  },
  {
    title: "Brand & Experience Strategy",
    description:
      "Build a memorable brand and dining experience that keeps customers returning.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  },
  {
    title: "Leadership & Staff Training",
    description:
      "Develop strong leadership systems and train teams for exceptional service delivery.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
  },
  {
    title: "Revenue Growth Strategy",
    description:
      "Implement data-driven strategies designed to increase profitability and long-term growth.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
];

function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white overflow-hidden">
      {/* Purple Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-purple-400 uppercase tracking-widest text-sm mb-3">
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Consulting That Elevates
            <span className="block text-purple-400">
              Restaurant Performance
            </span>
          </h2>

          <p className="text-white/70">
            Fleur partners with restaurant owners to strengthen operations,
            create memorable dining experiences, and build profitable
            hospitality brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Card = index % 2 === 0 ? motion.div : "div";

            return (
              <Card
                key={index}
                {...(index % 2 === 0 && {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6, delay: index * 0.1 },
                })}
                className="group relative h-[340px] rounded-xl overflow-hidden border border-white/10"
              >
                {/* Image */}
                <img
                  src={`${service.image}?auto=format&fit=crop&w=900&q=80`}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition"></div>

                {/* Purple Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent transition"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-white/80 text-sm mb-3">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="text-purple-400 text-sm font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
