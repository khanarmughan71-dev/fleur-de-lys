import { motion } from "framer-motion";

const categories = [
  {
    id: "strategy",
    title: "Strategy & Concept",
    services: [
      {
        title: "Concept Development",
        desc: "Define a unique restaurant identity that resonates with your target audience.",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      },
      {
        title: "Menu Engineering",
        desc: "Craft menus that balance customer appeal with profitability and efficiency.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947",
      },
      {
        title: "Site Selection",
        desc: "Choose locations strategically to maximize visibility and long-term success.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      },
    ],
  },
  {
    id: "design",
    title: "Design & Build",
    services: [
      {
        title: "Restaurant Design / Build-Out",
        desc: "Transform spaces into functional, visually compelling dining environments.",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      },
      {
        title: "Code Compliance",
        desc: "Ensure your operations meet all local regulations and industry standards.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      },
      {
        title: "Logistics",
        desc: "Streamline supply chains and operational flow for efficiency and consistency.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      },
    ],
  },
  {
    id: "operations",
    title: "Operations & Training",
    services: [
      {
        title: "Staff Training",
        desc: "Equip your team with the skills needed to deliver exceptional service.",
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
      },
      {
        title: "Leadership Coaching",
        desc: "Develop strong leaders who can manage teams and drive performance.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      },
      {
        title: "Staffing & Job Placement",
        desc: "Find and place the right talent for long-term operational success.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      },
      {
        title: "S.O.P Setup / Review",
        desc: "Build structured processes that ensure consistency and quality control.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      },
    ],
  },
  {
    id: "systems",
    title: "Systems & Performance",
    services: [
      {
        title: "POS Structuring",
        desc: "Design efficient POS systems tailored to your operational workflow.",
        image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
      },
      {
        title: "POS Training",
        desc: "Train your staff to use systems effectively and reduce operational errors.",
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
      {
        title: "Secret Shopping",
        desc: "Gain real insights into customer experience and service quality.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      },
    ],
  },
  {
    id: "growth",
    title: "Growth & Expansion",
    services: [
      {
        title: "Catering & Private Events",
        desc: "Expand revenue streams through curated dining and event experiences.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      },
      {
        title: "Full Restaurant Evaluation / L.P.",
        desc: "Comprehensive analysis of performance, operations, and profitability.",
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938",
      },
      {
        title: "Formal Valuations",
        desc: "Accurate business valuations to support strategic decisions and growth.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      },
    ],
  },
];

function Services() {
  return (
    <section className="bg-black text-white">
      {/* HERO */}
      <div className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fleur-de-lys Restaurant Services
          </h1>
          <p className="text-gray-300">
            Premium consulting solutions tailored for restaurant excellence.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {categories.map((category, index) => (
          <div key={index} id={category.id}>
            {/* CATEGORY TITLE */}
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-10 text-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              {category.title}
            </motion.h2>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, i) => (
                <motion.div
                  key={i}
                  className="group relative h-[280px] rounded-xl overflow-hidden border border-white/10"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: false }}
                >
                  {/* IMAGE */}
                  <img
                    src={`${service.image}?auto=format&fit=crop&w=900&q=80`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>

                  {/* CONTENT */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <h3 className="text-lg font-semibold mb-1">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                      {service.desc}
                    </p>
                  </div>

                  {/* HOVER LINE */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center pb-24">
        <h3 className="text-2xl font-semibold mb-4">
          Let’s Build Something Exceptional
        </h3>
        <p className="text-gray-400 mb-6">
          Partner with us to transform your restaurant vision.
        </p>

        <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-300 transition">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}

export default Services;
