import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToHash from "../ScrollToHash";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Preloader
import Preloader from "./components/Preloader";
import logo from "./assets/images/fleur-logo.png";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      {/* Main site */}
      <Navbar />

            {/* Preloader */}
      <Preloader logo={logo} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
