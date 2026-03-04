import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}

export default Home;