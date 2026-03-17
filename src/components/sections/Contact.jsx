import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="relative py-24 bg-[#0b0b0b] text-white overflow-hidden">
      {/* Silver Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gray-300/10 blur-[140px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gray-300 uppercase tracking-widest text-sm mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Let’s Start a Conversation
          </h2>

          <p className="text-white/70">
            Have questions or want to discuss your restaurant project? Reach out
            and our team will get back to you shortly.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-gray-400 transition">
                  <Mail className="text-gray-300" size={20} />
                </div>
                <span className="text-white/80">
                  contact@fleurconsulting.com
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-gray-400 transition">
                  <Phone className="text-gray-300" size={20} />
                </div>
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-gray-400 transition">
                  <MapPin className="text-gray-300" size={20} />
                </div>
                <span className="text-white/80">
                  120 Hospitality Avenue, New York
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=New+York&output=embed"
                className="w-full h-[260px] border-0"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-gray-400/40 transition"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-gray-300 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-gray-300 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-gray-300 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-gray-300 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-300/20 hover:bg-gray-400/30 text-white font-semibold py-3 rounded-full transition duration-300 hover:shadow-[0_0_15px_rgba(224,224,224,0.5)]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
