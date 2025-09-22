export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  result: string;
  stack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "finflow",
    title: "Finflow — SMB Invoicing",
    summary: "Automated invoicing MVP with subscriptions and email reminders.",
    result: "Went live in 28 days. 50+ paying accounts in first month.",
    stack: ["React", "Supabase", "Stripe"],
  },
  {
    id: "parcelpilot",
    title: "ParcelPilot — Delivery Ops",
    summary: "Driver scheduling, route planning, and live tracking dashboard.",
    result: "Pilot with 3 fleets. Helped close a pre-seed round.",
    stack: ["React", "PostGIS", "Map APIs"],
  },
  {
    id: "huddle",
    title: "Huddle — Community Platform",
    summary: "Event posts, membership tiers, and gated content.",
    result: "Launched to 1k users. 12% paid conversion.",
    stack: ["Webflow", "Memberstack", "Zapier"],
  },
];
