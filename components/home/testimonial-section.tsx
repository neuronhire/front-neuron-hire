"use client";

const testimonials = Array.from({ length: 5 }, (_, i) => ({
  title: "The best platform to design and manage incentive plans",
  description:
    "We are incredibly pleased with Teilur Talent as our talent partner. Their expertise has allowed us to recruit qualified",
  label: "A DISRUPTIVE NEW MODEL",
}));

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
            A DISRUPTIVE NEW MODEL
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            The best platform to design <br /> and manage incentive plans
          </h2>
          <p className="text-base text-neutral-600">
            We are incredibly pleased with Teilur Talent as our talent partner.
            Their expertise has <br /> allowed us to recruit qualified
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
              {testimonials[0].label}
            </p>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {testimonials[0].title}
            </h3>
            <p className="text-sm text-neutral-600">
              {testimonials[0].description}
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-6">
            {testimonials.slice(1).map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                  {item.label}
                </p>
                <h4 className="text-md font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
