import { Link } from "react-router-dom";

function About() {
  return (
    <section className="py-24 bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
            alt="Restaurant consulting"
            className="rounded-xl shadow-xl"
          />

          {/* Floating Experience Card */}
          <div className="absolute -bottom-8 left-8 bg-black/80 border border-white/10 backdrop-blur-md rounded-lg px-6 py-5 shadow-lg">
            <p className="text-3xl font-bold text-accent">15+</p>
            <p className="text-sm text-white/70">Years Industry Experience</p>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <p className="text-accent uppercase tracking-widest text-sm mb-3">
            About Fleur
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Helping Restaurants Build
            <span className="block text-accent">
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
            <div>
              <h3 className="text-3xl font-bold text-accent">120+</h3>
              <p className="text-sm text-white/70">Restaurants Consulted</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-accent">$25M+</h3>
              <p className="text-sm text-white/70">Revenue Growth</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-accent">30+</h3>
              <p className="text-sm text-white/70">Cities Served</p>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-accent text-black font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
