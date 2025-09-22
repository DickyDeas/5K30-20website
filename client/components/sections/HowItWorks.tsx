import { CalendarDays, Lightbulb, Rocket, Wrench } from "lucide-react";

const steps = [
  {
    title: "Week 1 • Strategy",
    icon: Lightbulb,
    text: "Define goals, success metrics, and scope. UX flows and low-fi wireframes.",
  },
  {
    title: "Week 2 • Build",
    icon: Wrench,
    text: "Move fast on core features. Ship vertical slices end-to-end.",
  },
  {
    title: "Week 3 • Polish",
    icon: CalendarDays,
    text: "Refine UI, add validations, connect integrations (Stripe, auth, DB).",
  },
  {
    title: "Week 4 • Launch",
    icon: Rocket,
    text: "Deploy, connect analytics, handover docs, and iterate on feedback.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">How It Works</h2>
        <p className="mt-3 text-foreground/70">Four focused sprints. Weekly milestones. Clear communication.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-500/40 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400 ring-1 ring-inset ring-brand-500/30">
              <s.icon className="size-5" />
            </div>
            <h3 className="text-base font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
