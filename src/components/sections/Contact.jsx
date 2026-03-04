import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="py-24 bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent uppercase tracking-widest text-sm mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Let’s Start a Conversation
          </h2>

          <p className="text-white/70">
            Have questions or want to discuss your restaurant project? Reach out
            and our team will get back to you shortly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-accent" size={22} />
                <span className="text-white/80">
                  contact@fleurconsulting.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-accent" size={22} />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-accent" size={22} />
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
                className="w-full h-[250px] border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-accent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-black font-semibold py-3 rounded-full hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
