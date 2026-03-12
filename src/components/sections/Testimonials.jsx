const testimonials = [
  {
    name: "Michael Turner",
    role: "Restaurant Owner",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    text: "Fleur completely transformed our restaurant operations. Within six months we improved service efficiency and increased our revenue significantly.",
  },
  {
    name: "Sophia Martinez",
    role: "Hospitality Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    text: "Their strategic guidance helped us refine our concept and brand positioning. The results were beyond our expectations.",
  },
  {
    name: "Daniel Chen",
    role: "Restaurant Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    text: "Working with Fleur gave us the operational clarity we needed. Their consulting approach is practical, insightful, and results-driven.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-28 text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover top-0 left-0"
      >
        <source src="testimonial-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="uppercase tracking-[0.3em] text-purple-400 text-sm mb-4">
            Client Stories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Restaurant Leaders
            </span>
          </h2>

          <p className="text-white/70">
            We help hospitality businesses optimize operations, refine their
            strategy, and unlock sustainable growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-400/40 transition duration-500 hover:-translate-y-2"
            >

              {/* Purple Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition"></div>

              {/* Stars */}
              <div className="text-purple-400 mb-4 text-lg">
                ★ ★ ★ ★ ★
              </div>

              {/* Text */}
              <p className="text-white/80 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 relative z-10">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-purple-400/40"
                />

                <div>
                  <h4 className="font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-white/60">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;