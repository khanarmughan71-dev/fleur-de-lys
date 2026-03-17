import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "../../assets/images/fleur-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white/70 pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Silver Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gray-300/10 blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-start">
          {/* ================= BRAND ================= */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Fleur-de-lys Logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />

              <div className="leading-tight">
                <h1 className="font-serif uppercase tracking-wide text-lg sm:text-xl text-white">
                  FLEUR-DE-LYS
                </h1>

                <p className="font-serif uppercase text-[10px] tracking-[0.35em] text-white/60">
                  RESTAURANT SERVICES
                </p>
              </div>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Fleur-de-Lys provides strategic restaurant consulting focused on
              operational excellence, brand positioning, and sustainable
              hospitality growth.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-gray-300/20 hover:bg-gray-400/30 text-white font-semibold px-5 py-2.5 rounded-full transition text-sm"
            >
              Book Consultation
            </Link>
          </div>

          {/* ================= COMPANY ================= */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Company</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gray-300 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-gray-300 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-gray-300 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-gray-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">
              Consulting Services
            </h4>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-300 transition">
                Restaurant Concept Development
              </li>

              <li className="hover:text-gray-300 transition">
                Menu Engineering
              </li>

              <li className="hover:text-gray-300 transition">
                Operational Optimization
              </li>

              <li className="hover:text-gray-300 transition">
                Leadership & Staff Training
              </li>

              <li className="hover:text-gray-300 transition">
                Revenue Growth Strategy
              </li>
            </ul>
          </div>

          {/* ================= SOCIAL ================= */}
          <div className="space-y-5">
            <h4 className="text-white font-semibold tracking-wide">
              Connect With Us
            </h4>

            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 bg-[#141414] rounded-lg hover:bg-gray-300/20 hover:text-white transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="p-3 bg-[#141414] rounded-lg hover:bg-gray-300/20 hover:text-white transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="p-3 bg-[#141414] rounded-lg hover:bg-gray-300/20 hover:text-white transition"
              >
                <Instagram size={18} />
              </a>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              Fleur-de-Lys Restaurant Consulting <br />
              By Appointment Only <br />
              New York, United States
            </p>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10 mt-12 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-3 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Fleur-de-Lys Consulting. All rights
            reserved.
          </p>

          <p>
            Powered & Developed by{" "}
            <span className="text-gray-300">influitivezone.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
