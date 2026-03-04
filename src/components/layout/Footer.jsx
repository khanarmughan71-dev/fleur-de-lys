import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "../../assets/images/fleur-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white/70 pt-16 sm:pt-20 lg:pt-24 pb-8 border-t border-white/10">
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

                <p className="font-serif uppercase text-[10px] tracking-[0.35em] text-white/70">
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
              className="inline-block bg-white text-black font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition text-sm"
            >
              Book Consultation
            </Link>
          </div>

          {/* ================= COMPANY ================= */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Company</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-accent transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-accent transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-accent transition">
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
              <li className="hover:text-accent transition">
                Restaurant Concept Development
              </li>

              <li className="hover:text-accent transition">Menu Engineering</li>

              <li className="hover:text-accent transition">
                Operational Optimization
              </li>

              <li className="hover:text-accent transition">
                Leadership & Staff Training
              </li>

              <li className="hover:text-accent transition">
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
                className="p-2.5 sm:p-3 bg-[#141414] rounded-lg hover:bg-accent hover:text-black transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="p-2.5 sm:p-3 bg-[#141414] rounded-lg hover:bg-accent hover:text-black transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="p-2.5 sm:p-3 bg-[#141414] rounded-lg hover:bg-accent hover:text-black transition"
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
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-3 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Fleur-de-Lys Consulting. All rights
            reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="text-accent">Armughan.Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
