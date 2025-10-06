const testimonials = [
  {
    name: "Kate",
    role: "UPHire IQ",
    quote:
      "They shipped a usable MVP in under a month. Clear milestones, zero fluff. We closed our first 5 meetings within 2 weeks of launch.",
  },
  {
    name: "Lauren",
    role: "Olympia Club app",
    quote:
      "Best MVP experience, we had a great idea but no clue how to get it built. 5k30 did it all for us!",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What Founders Say</h2>
      </div>
      <div className="mt-10 overflow-hidden">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="snap-center shrink-0 basis-[90%] rounded-2xl border border-white/10 bg-white/5 p-6 sm:basis-[48%] lg:basis-[32%]"
            >
              {t.quote ? (
                <blockquote className="text-pretty text-lg leading-relaxed text-white/90">“{t.quote}”</blockquote>
              ) : null}
              <figcaption className="mt-4 text-sm text-foreground/70">
                <span className="font-semibold text-white">{t.name}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
