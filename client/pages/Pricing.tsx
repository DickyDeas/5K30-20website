import MainLayout from "@/layouts/MainLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-extrabold text-white sm:text-5xl">Simple. Transparent. £5,000 Flat.</h1>
          <p className="mt-3 text-foreground/80">Everything you need to launch. No hourly surprises, no lock-in.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">The 5K30 Package</h2>
            <ul className="mt-4 grid gap-3 text-sm text-foreground/80">
              <li>• 4-week build sprint with weekly demos</li>
              <li>• Product strategy, UI, and implementation</li>
              <li>• Auth, payments, and analytics setup</li>
              <li>• Production deployment and handover docs</li>
              <li>• 2 weeks post-launch support</li>
            </ul>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-500/90">
                <Link to="/contact">Book Free Call</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-bold text-white">Add-ons</h3>
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="design">
                <AccordionTrigger>Branding & Marketing Site</AccordionTrigger>
                <AccordionContent>
                  Dedicated marketing site or landing pages with CMS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mobile">
                <AccordionTrigger>Mobile App Shell</AccordionTrigger>
                <AccordionContent>
                  Wrap the MVP in a mobile shell and publish to app stores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ops">
                <AccordionTrigger>Ops & Automation</AccordionTrigger>
                <AccordionContent>
                  Integrations with Zapier/Make and admin dashboards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-bold text-white">FAQ</h3>
          <div className="mt-4 grid gap-4 text-sm text-foreground/80">
            <div>
              <p className="font-semibold text-white">What if scope changes?</p>
              <p>We time-box features to maintain momentum. Larger items become a follow-up sprint.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Who owns the IP?</p>
              <p>You do. Code and designs are handed over on completion.</p>
            </div>
            <div>
              <p className="font-semibold text-white">What stack do you use?</p>
              <p>We pick the fastest path for your goals — Webflow/Bubble or React + Supabase + Stripe.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
