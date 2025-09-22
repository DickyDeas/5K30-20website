import MainLayout from "@/layouts/MainLayout";
import { CalendarDays, Lightbulb, Rocket, Wrench } from "lucide-react";

const steps = [
  { title: "Week 1", subtitle: "Strategy", icon: Lightbulb, text: "Product goals, success metrics, flows, and low-fi wireframes." },
  { title: "Week 2", subtitle: "Build", icon: Wrench, text: "Ship core features end-to-end. Daily commits and rapid feedback." },
  { title: "Week 3", subtitle: "Polish", icon: CalendarDays, text: "UI refinement, edge cases, integrations (Stripe, auth, DB)." },
  { title: "Week 4", subtitle: "Launch", icon: Rocket, text: "Deploy, analytics, handover docs, and post-launch iteration." },
];

export default function Process() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-extrabold text-white sm:text-5xl">Our Proven 30-Day Build Sprint</h1>
          <p className="mt-3 text-foreground/80">A transparent, milestone-driven approach that keeps momentum high and outcomes clear.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <ol className="relative mx-auto grid gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
                <s.icon className="size-6 text-brand-400" />
              </div>
              <h3 className="text-white">
                <span className="text-sm font-semibold text-foreground/70">{s.title}</span>
                <span className="block text-lg font-bold">{s.subtitle}</span>
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/70">
          <span className="font-semibold text-foreground/80">Tools:</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Webflow</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Bubble</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">React</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Supabase</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Stripe</span>
        </div>
      </section>
    </MainLayout>
  );
}
