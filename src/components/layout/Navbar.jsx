import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/fleur-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Fleur-de-lys Logo"
              className="h-12 w-auto object-contain"
            />

            <div className="leading-tight">
              <h1
                className={`font-serif uppercase tracking-wide text-xl md:text-2xl lg:text-3xl transition-colors duration-300 ${
                  scrolled ? "text-white" : "text-white"
                }`}
              >
                FLEUR-DE-LYS
              </h1>

              <p
                className={`font-serif uppercase text-[10px] md:text-xs tracking-[0.35em] mt-[-2px] transition-colors duration-300 ${
                  scrolled ? "text-white/70" : "text-white/80"
                }`}
              >
                RESTAURANT SERVICES
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div
            className={`hidden md:flex items-center space-x-10 transition-colors duration-300 text-white`}
          >
            <Link to="/" className="hover:text-gray-300 transition">
              HOME
            </Link>

            <Link to="/about" className="hover:text-gray-300 transition">
              ABOUT
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300 transition">
                SERVICES <span className="text-xs">▾</span>
              </button>

              <div className="absolute left-0 mt-4 w-64 bg-[#0b0b0b] border border-white/10 text-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/services#strategy"
                  className="block px-6 py-3 hover:bg-white/5"
                >
                  Strategy & Concept
                </Link>

                <Link
                  to="/services#design"
                  className="block px-6 py-3 hover:bg-white/5"
                >
                  Design & Build
                </Link>

                <Link
                  to="/services#operations"
                  className="block px-6 py-3 hover:bg-white/5"
                >
                  Operations & Training
                </Link>

                <Link
                  to="/services#systems"
                  className="block px-6 py-3 hover:bg-white/5"
                >
                  Systems & Performance
                </Link>

                <Link
                  to="/services#growth"
                  className="block px-6 py-3 hover:bg-white/5"
                >
                  Growth & Expansion
                </Link>
              </div>
            </div>

            <Link to="/contact" className="hover:text-gray-300 transition">
              CONTACT
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center
              px-7 py-3
              font-semibold
              rounded-full
              bg-gray-500 hover:bg-gray-400
              text-white
              shadow-lg
              hover:shadow-[0_0_20px_rgba(192,192,192,0.5)]
              transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-white"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-160 py-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-6 text-white bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 mt-4">
            <Link to="/" onClick={() => setIsOpen(false)}>
              HOME
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>

            <div className="flex flex-col">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between gap-1 hover:text-gray-300 transition w-full"
              >
                SERVICES{" "}
                <span className="text-xs">
                  {mobileServicesOpen ? "▴" : "▾"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 mt-2 ${
                  mobileServicesOpen ? "max-h-64" : "max-h-0"
                }`}
              >
                <Link
                  to="/services#strategy"
                  className="block px-6 py-3 hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  Strategy & Concept
                </Link>
                <Link
                  to="/services#design"
                  className="block px-6 py-3 hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  Design & Build
                </Link>
                <Link
                  to="/services#operations"
                  className="block px-6 py-3 hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  Operations & Training
                </Link>
                <Link
                  to="/services#systems"
                  className="block px-6 py-3 hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  Systems & Performance
                </Link>
                <Link
                  to="/services#growth"
                  className="block px-6 py-3 hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  Growth & Expansion
                </Link>
              </div>
            </div>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>

            <Link
              to="/contact"
              className="bg-gray-500 text-white text-center py-2 rounded-full font-semibold hover:bg-purple-600 transition"
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
