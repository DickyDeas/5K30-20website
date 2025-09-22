import MainLayout from "@/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-extrabold text-white sm:text-5xl">About 5K30</h1>
          <p className="mt-3 text-foreground/80">
            We help founders validate faster. Tight sprints, strong product taste, and pragmatic engineering.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white">Principles</h3>
            <ul className="mt-3 grid gap-2 text-sm text-foreground/80">
              <li>• Momentum over perfection</li>
              <li>• Vertical slices over horizontal layers</li>
              <li>• Clear decisions, transparent tradeoffs</li>
              <li>• Ship it, measure it, iterate</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white">What You Get</h3>
            <ul className="mt-3 grid gap-2 text-sm text-foreground/80">
              <li>• Hands-on product partner</li>
              <li>• Real-world integrations and analytics</li>
              <li>• Clean, maintainable codebase</li>
              <li>• A launch-ready MVP</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white">Why use us?</h3>
            <ul className="mt-3 grid gap-2 text-sm text-foreground/80">
              <li>• 15 years of experience in data analytics and product delivery.</li>
              <li>• Scaled multiple companies to seven‑figure (£) revenues.</li>
              <li>• We know how to get you investor‑ready with the right metrics and story.</li>
              <li>• We love building cool things — fast and with strong product taste.</li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
