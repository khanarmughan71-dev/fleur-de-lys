import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#151515] to-[#1c1c1c] border border-white/10 rounded-2xl px-10 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-accent uppercase tracking-widest text-sm mb-3">
              Start Your Transformation
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Ready to Elevate
              <span className="block text-accent">
                Your Restaurant Business?
              </span>
            </h2>

            <p className="text-white/70">
              Work with Fleur to strengthen your operations, refine your brand,
              and build a restaurant that thrives in today’s competitive market.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-[2px] transition duration-300"
            >
              Book Consultation
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
