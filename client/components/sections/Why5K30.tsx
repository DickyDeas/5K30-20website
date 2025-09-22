import { Bolt, CreditCard, Gauge, Layers } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Fixed Price",
    text: "£5,000 flat. No hourly surprises. Clear scope and outcomes.",
  },
  { icon: Gauge, title: "Fast", text: "Move from idea to live MVP in 30 days with weekly demos." },
  { icon: Layers, title: "Scalable", text: "Built on modern stacks (Webflow/Bubble/React + Supabase + Stripe)." },
  { icon: Bolt, title: "Startup-Ready", text: "Analytics, auth, payments, docs — the real-world essentials." },
];

export default function Why5K30() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Why 5K30?</h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400 ring-1 ring-inset ring-accent-500/30">
              <f.icon className="size-5" />
            </div>
            <h3 className="text-base font-bold text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
