import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Why5K30 from "@/components/sections/Why5K30";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

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
      <HowItWorks />
      <Why5K30 />
      <Testimonials />
      <div className="py-10" />
      <FinalCTA />
      <p className="sr-only">{exampleFromServer}</p>
    </MainLayout>
  );
}
