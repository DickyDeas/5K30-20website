import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cta" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--brand-500))" />
              <stop offset="100%" stopColor="hsl(var(--accent-500))" />
            </linearGradient>
          </defs>
          <rect width="1200" height="400" fill="url(#cta)" opacity="0.08" />
        </svg>
      </div>
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center shadow-2xl sm:px-10">
        <h3 className="text-balance text-3xl font-extrabold text-white sm:text-4xl">
          Your MVP in 30 Days. £5,000.
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-foreground/80">
          Book a free 20-minute call. We’ll assess your idea and share a clear plan and timeline.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-500/90">
            <Link to="/contact">Book Free Call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
