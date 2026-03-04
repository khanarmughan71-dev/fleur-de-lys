import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/fleur-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Fleur-de-lys Logo"
              className="h-16 w-auto object-contain transition-all duration-300"
            />

            <div className="leading-tight">
              <h1
                className={`font-serif uppercase tracking-wide text-xl md:text-2xl lg:text-3xl transition-colors duration-300 ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                FLEUR-DE-LYS
              </h1>

              <p
                className={`font-serif uppercase text-[10px] md:text-xs tracking-[0.35em] mt-[-2px] transition-colors duration-300 ${
                  scrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                RESTAURANT SERVICES
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div
            className={`hidden md:flex items-center space-x-10 transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link to="/" className="hover:text-accent transition">
              HOME
            </Link>

            <Link to="/about" className="hover:text-accent transition">
              ABOUT
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-accent transition">
                SERVICES <span className="text-xs">▾</span>
              </button>

              <div className="absolute left-0 mt-4 w-56 bg-white text-gray-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/services"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  Restaurant Consulting
                </Link>

                <Link
                  to="/services"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  Staff Training
                </Link>

                <Link
                  to="/services"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  Menu Development
                </Link>
              </div>
            </div>

            <Link to="/contact" className="hover:text-accent transition">
              CONTACT
            </Link>
          </div>

          {/* ================= CTA ================= */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center
              px-7 py-3
              font-semibold
              rounded-full
              shadow-lg
              transition-all duration-300 tracking-wide
              ${
                scrolled
                  ? "bg-black text-white hover:opacity-90"
                  : "bg-black/80 backdrop-blur-lg text-white hover:bg-black/60"
              }
              `}
            >
              Book Consultation
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            ☰
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 py-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-6 text-white bg-black/80 backdrop-blur-lg rounded-xl p-6 mt-4">
            <Link to="/" onClick={() => setIsOpen(false)}>
              HOME
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>

            <Link to="/services" onClick={() => setIsOpen(false)}>
              SERVICES
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>

            <Link
              to="/contact"
              className="bg-accent text-black text-center py-2 rounded-full font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;