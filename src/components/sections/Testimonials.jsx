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
    <section className="py-24 bg-gradient-to-b from-[#0b0b0b] to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent uppercase tracking-widest text-sm mb-3">
            Client Success
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Restaurant Owners
            <span className="block text-accent">Say About Fleur</span>
          </h2>

          <p className="text-white/70">
            We partner with restaurant owners and hospitality teams to deliver
            meaningful improvements in operations, leadership, and growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-accent transition duration-300"
            >
              {/* Stars */}
              <div className="text-accent mb-4">⭐ ⭐ ⭐ ⭐ ⭐</div>

              {/* Text */}
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
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
