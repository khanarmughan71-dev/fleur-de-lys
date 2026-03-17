import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Construction & Design",
    description:
      "Plan and execute restaurant construction and interior design that aligns with your brand and operational needs.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    title: "Catering & Events",
    description:
      "Expand your business with catering services and event strategies that increase revenue and brand exposure.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033",
  },
  {
    title: "Commercial Real Estate Expertise",
    description:
      "Expert guidance on site selection and lease negotiation to secure the best location for your restaurant.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
];

function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white overflow-hidden">
      {/* Premium Silver Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#B0B0B020] blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            className="uppercase tracking-widest text-sm mb-3"
            style={{ color: "#E0E0E0" }}
          >
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Consulting That Elevates
            <span className="block" style={{ color: "#E0E0E0" }}>
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
                  viewport: { once: false },
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

                {/* Premium Silver Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#B0B0B020] via-transparent to-transparent transition"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#E0E0E0" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-white/80 text-sm mb-3">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: "#E0E0E0" }}
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
