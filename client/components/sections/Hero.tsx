import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Large faint background logo filling the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 flex items-center justify-center"
        style={{
          opacity: 0.05,
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "hsl(var(--brand-500))",
            WebkitMaskImage: `url(https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=1600)`,
            maskImage: `url(https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=1600)`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-1/3 top-[-10%] h-[40rem] w-[40rem] rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -right-1/3 bottom-[-10%] h-[40rem] w-[40rem] rounded-full bg-accent-500/20 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-foreground/80">
            <span className="inline-block size-2 rounded-full bg-brand-400" /> Fast • Fixed • Startup-Ready
          </div>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Your MVP in 30 Days.
            <span className="block bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">£5,000 Flat.</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg text-foreground/80">
            We design, build, and launch a polished MVP in four focused weekly sprints.
            Fixed price. Zero surprises. Built with modern, scalable tools.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-500/90">
              <Link to="/contact">Book Free Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              <Link to="/process">See Process</Link>
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-6 text-sm text-foreground/60">
            <div>Webflow</div>
            <div>Bubble</div>
            <div>Supabase</div>
            <div>Stripe</div>
          </div>
        </div>
        <div className="relative">
          <LaptopIllustration />
        </div>
      </div>
    </section>
  );
}

function LaptopIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="absolute inset-0 -z-10 animate-pulse rounded-3xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 blur-2xl" />
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-background/60">
          <svg viewBox="0 0 800 450" className="h-[340px] w-full">
            <defs>
              <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--brand-500))" />
                <stop offset="100%" stopColor="hsl(var(--accent-500))" />
              </linearGradient>
            </defs>
            <rect width="800" height="450" fill="url(#grad)" opacity="0.08" />
            <g>
              <circle cx="150" cy="120" r="60" fill="url(#grad)" opacity="0.35" />
              <rect x="240" y="100" width="420" height="40" rx="8" fill="#ffffff" opacity="0.15" />
              <rect x="240" y="160" width="320" height="28" rx="6" fill="#ffffff" opacity="0.12" />
              <rect x="240" y="200" width="360" height="28" rx="6" fill="#ffffff" opacity="0.12" />
              <rect x="240" y="240" width="300" height="28" rx="6" fill="#ffffff" opacity="0.12" />
              <rect x="150" y="280" width="550" height="8" rx="4" fill="#ffffff" opacity="0.15" />
              <rect x="150" y="300" width="520" height="8" rx="4" fill="#ffffff" opacity="0.12" />
              <rect x="150" y="320" width="560" height="8" rx="4" fill="#ffffff" opacity="0.12" />
            </g>
          </svg>
        </div>
        <div className="mx-auto -mt-2 h-3 w-1/2 rounded-b-xl bg-white/20" />
      </div>
    </div>
  );
}
