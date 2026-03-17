import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

      {/* Premium Silver Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#B0B0B020] blur-[140px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-4 py-1 border rounded-full text-xs sm:text-sm backdrop-blur-sm"
          style={{ borderColor: "#D1D1D1", color: "#D1D1D1" }}
        >
          Restaurant Growth Consulting
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6"
        >
          Transforming Restaurants Into
          <span className="block mt-2 sm:mt-3" style={{ color: "#E0E0E0" }}>
            High-Performance Businesses
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-base sm:text-lg md:text-xl mx-auto mb-10 leading-relaxed"
        >
          Strategic consulting, operational excellence, and leadership training
          designed to elevate your restaurant’s performance, profitability, and
          long-term growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3 bg-gray-500 hover:bg-gray-400 text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(192,192,192,0.5)] hover:-translate-y-1 transition-all duration-300"
          >
            Book Consultation
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-3 border rounded-full transition-all duration-300"
            style={{ borderColor: "#D1D1D1", color: "#E0E0E0" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E0E0E0";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#E0E0E0";
            }}
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden sm:flex justify-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 flex gap-12 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold" style={{ color: "#E0E0E0" }}>
                120+
              </h3>
              <p className="text-white/70 text-sm">Restaurants Helped</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold" style={{ color: "#E0E0E0" }}>
                $25M+
              </h3>
              <p className="text-white/70 text-sm">Revenue Growth</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold" style={{ color: "#E0E0E0" }}>
                15+
              </h3>
              <p className="text-white/70 text-sm">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
