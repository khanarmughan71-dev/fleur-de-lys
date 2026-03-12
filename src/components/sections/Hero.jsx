import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 sm:px-10 lg:px-16">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/fleur-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90"></div>

      {/* Purple Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-black-600/20 blur-[140px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-24">

        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1 border border-purple-400/40 rounded-full text-xs sm:text-sm text-purple-300 backdrop-blur-sm">
          Restaurant Growth Consulting
        </div>

        {/* Title */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
          Transforming Restaurants Into
          <span className="block text-purple-400 mt-2 sm:mt-3">
            High-Performance Businesses
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/80 text-base sm:text-lg md:text-xl mx-auto mb-10 leading-relaxed">
          Strategic consulting, operational excellence, and leadership training
          designed to elevate your restaurant’s performance, profitability,
          and long-term growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all duration-300"
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

        {/* Stats */}
        <div className="hidden sm:flex justify-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 flex gap-12 text-white shadow-2xl">

            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-400">120+</h3>
              <p className="text-white/70 text-sm">Restaurants Helped</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-400">$25M+</h3>
              <p className="text-white/70 text-sm">Revenue Growth</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-400">15+</h3>
              <p className="text-white/70 text-sm">Years Experience</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;