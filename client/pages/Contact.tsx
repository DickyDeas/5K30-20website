import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-extrabold text-white sm:text-5xl">Let's Launch Your MVP</h1>
          <p className="mt-3 text-foreground/80">Tell us about your idea and we'll share a plan for a 30-day build.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <form
          name="contact"
          method="POST"
          netlify
          netlify-honeypot="bot-field"
          className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
          onSubmit={(e) => {
            alert("Thanks! We'll get back to you shortly.");
          }}
        >
          <input type="hidden" name="bot-field" />
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-white">Name</label>
            <Input name="name" placeholder="Your name" required />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-white">Email</label>
            <Input name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-white">Idea description</label>
            <Textarea name="idea" placeholder="Tell us about your product and goals" required rows={6} />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" className="bg-brand-500 hover:bg-brand-500/90">Submit</Button>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-brand-400 underline-offset-4 hover:underline"
            >
              Or book via Calendly
            </a>
          </div>
        </form>
      </section>
    </MainLayout>
  );
}
