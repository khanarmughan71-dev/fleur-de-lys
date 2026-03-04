import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative p-20 min-h-screen w-full overflow-hidden flex items-center justify-center pt-28 px-6 sm:px-10 lg:px-16">
      {/* ===== Background Video ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/fleur-background.mp4" type="video/mp4" />
      </video>

      {/* ===== Dark Gradient Overlay ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-5 px-4 py-1 border border-white/20 rounded-full text-xs sm:text-sm text-white/80 backdrop-blur-sm">
          Restaurant Growth Consulting
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Transforming Restaurants Into
          <span className="block text-accent mt-2 sm:mt-3">
            High-Performance Businesses
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Strategic consulting, operational excellence, and leadership training
          designed to elevate your restaurant’s performance, profitability, and
          long-term growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3 bg-black text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Book Consultation
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore Services
          </Link>
        </div>

        {/* Stats Card */}
        <div className="hidden sm:flex justify-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 sm:px-10 py-5 sm:py-6 flex flex-col sm:flex-row gap-6 sm:gap-12 text-white shadow-2xl">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-accent">
                120+
              </h3>
              <p className="text-white/70 text-xs sm:text-sm">
                Restaurants Helped
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-accent">
                $25M+
              </h3>
              <p className="text-white/70 text-xs sm:text-sm">Revenue Growth</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-accent">15+</h3>
              <p className="text-white/70 text-xs sm:text-sm">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
