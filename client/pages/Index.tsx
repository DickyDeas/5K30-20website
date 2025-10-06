import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Why5K30 from "@/components/sections/Why5K30";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  useEffect(() => {
    fetchDemo();
  }, []);
  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as { message: string };
      setExampleFromServer(data.message);
    } catch (error) {
      // non-blocking
      console.warn("Example server unreachable");
    }
  };

  return (
    <MainLayout>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-brand-500 bg-gradient-to-br from-brand-600/10 to-brand-500/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Turnkey business ready — The 8K30 Package</h3>
            <p className="mt-1 text-sm text-foreground/80">If you want a fully business-ready product with go-to-market assets, pitch deck, cashflow projections, website and branding — check out the 8K30 package.</p>
          </div>
          <div>
            <Button asChild className="bg-brand-600 hover:bg-brand-600/90">
              <Link to="/pricing">Learn about 8K30</Link>
            </Button>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Why5K30 />
      <Testimonials />
      <div className="py-10" />
      <FinalCTA />
      <p className="sr-only">{exampleFromServer}</p>
    </MainLayout>
  );
}
