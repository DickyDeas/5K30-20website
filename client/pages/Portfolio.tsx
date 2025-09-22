import MainLayout from "@/layouts/MainLayout";
import { caseStudies } from "@/data/caseStudies";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Portfolio() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-extrabold text-white sm:text-5xl">Selected Work</h1>
          <p className="mt-3 text-foreground/80">A few stories from recent 30-day build sprints.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <Dialog key={c.id}>
              <DialogTrigger asChild>
                <button className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-brand-500/40 hover:bg-white/10">
                  <div className="h-36 w-full rounded-lg bg-gradient-to-br from-brand-500/20 to-accent-500/20 ring-1 ring-inset ring-white/10" />
                  <h3 className="mt-4 text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{c.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-foreground/60">
                    {c.stack.map((s) => (
                      <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{c.title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="h-56 w-full rounded-lg bg-gradient-to-br from-brand-500/20 to-accent-500/20 ring-1 ring-inset ring-white/10" />
                  <p className="text-sm text-foreground/80">{c.summary}</p>
                  <p className="text-sm font-semibold text-white/90">Outcome: {c.result}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
