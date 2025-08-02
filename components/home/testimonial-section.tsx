"use client";

const testimonials = Array.from({ length: 5 }, () => ({
  title: "The best platform to design and manage incentive plans",
  description:
    "We are incredibly pleased with Teilur Talent as our talent partner. Their expertise has allowed us to recruit qualified",
  label: "A DISRUPTIVE NEW MODEL",
}));

export function TestimonialsSection() {
  const [first, ...rest] = testimonials;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase font-medium tracking-wide text-neuronhire-red-lines mb-2 body-satoshi">
            A DISRUPTIVE NEW MODEL
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-neuronhire-red-lines mb-4 body-mackinac">
            The best platform to design <br /> and manage incentive plans
          </h2>
          <p className="text-base text-neuronhire-red-lines font-medium body-satoshi">
            We are incredibly pleased with Teilur Talent as our talent partner.
            Their expertise has <br /> allowed us to recruit qualified
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col">
            <div
              aria-hidden
              className="mb-6 h-[360px] w-full rounded-2xl bg-neuronhire-bg-main"
            />
            <article className="rounded-2xl bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] mb-1 text-neuronhire-red-lines">
                {first.label}
              </p>
              <h3 className="text-lg font-semibold mb-2 text-neuronhire-red-lines">
                {first.title}
              </h3>
              <p className="text-sm text-neuronhire-red-lines">
                {first.description}
              </p>
            </article>
          </div>

          <div className="flex flex-col gap-6">
            {rest.map((item, i) => (
              <article key={i} className="flex gap-4 rounded-2xl">
                <div
                  aria-hidden
                  className="w-20 md:w-24 h-28 rounded-lg bg-neuronhire-bg-main shrink-0"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] mb-1 text-neuronhire-red-lines body-satoshi">
                    {item.label}
                  </p>
                  <h4 className="text-2xl font-medium leading-snug mb-2 text-neuronhire-red-lines body-mackinac">
                    {item.title}
                  </h4>
                  <p className="text-lg text-neuronhire-red-lines body-satoshi">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
