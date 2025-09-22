import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/90">
            <div className="grid size-7 place-items-center rounded-md bg-gradient-to-br from-brand-600 to-brand-400 text-white">
              <span className="text-[10px] font-extrabold">5K</span>
            </div>
            <span>30</span>
          </Link>
          <p className="text-center text-xs text-foreground/60">
            © {new Date().getFullYear()} 5K30. Your MVP in 30 days for £5,000.
          </p>
        </div>
      </div>
    </footer>
  );
}
