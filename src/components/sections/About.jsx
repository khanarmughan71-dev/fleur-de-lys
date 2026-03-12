import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative py-24 bg-[#0b0b0b] text-white overflow-hidden">
      {/* Purple Ambient Glow */}
      <div className="absolute right-0 top-0 w-[600px] h-[400px] bg-purple-600/10 blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
            alt="Restaurant consulting"
            className="rounded-xl shadow-2xl"
          />

          {/* Floating Experience Card */}
          <div className="absolute -bottom-8 left-8 bg-black/80 border border-purple-500/20 backdrop-blur-md rounded-lg px-6 py-5 shadow-lg">
            <p className="text-3xl font-bold text-purple-400">15+</p>
            <p className="text-sm text-white/70">Years Industry Experience</p>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 uppercase tracking-widest text-sm mb-3">
            About Fleur
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Helping Restaurants Build
            <span className="block text-purple-400">
              Profitable Hospitality Brands
            </span>
          </h2>

          <p className="text-white/70 mb-6 leading-relaxed">
            Fleur provides specialized consulting for restaurant owners,
            hospitality groups, and entrepreneurs seeking to improve performance
            and build sustainable restaurant businesses. Our approach combines
            operational expertise, strategic insight, and leadership
            development.
          </p>

          <p className="text-white/70 mb-8 leading-relaxed">
            From concept development to operational optimization, we partner
            with restaurants to create systems that drive long-term success and
            memorable guest experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="border border-white/10 rounded-lg p-4 text-center">
              <h3 className="text-3xl font-bold text-purple-400">120+</h3>
              <p className="text-sm text-white/70">Restaurants Consulted</p>
            </div>

            <div className="border border-white/10 rounded-lg p-4 text-center">
              <h3 className="text-3xl font-bold text-purple-400">$25M+</h3>
              <p className="text-sm text-white/70">Revenue Growth</p>
            </div>

            <div className="border border-white/10 rounded-lg p-4 text-center">
              <h3 className="text-3xl font-bold text-purple-400">30+</h3>
              <p className="text-sm text-white/70">Cities Served</p>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 hover:-translate-y-1 transition duration-300"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
