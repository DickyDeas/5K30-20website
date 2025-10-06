import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close any open mobile menus when navigating
    document.activeElement instanceof HTMLElement && document.activeElement.blur();
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70",
        scrolled ? "border-b border-white/10" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo: use the SVG asset as the visible brand mark, colored via mask, and remove the "30" text to match request */}
        <Link to="/" className="group inline-flex items-center gap-3">
          <div className="relative flex items-center">
            <div
              aria-hidden
              className="w-12 h-8 sm:w-14 sm:h-10 md:w-[168px] md:h-[120px] rounded-md md:rounded-lg bg-[hsl(var(--brand-500))]"
              style={{
                WebkitMaskImage: `url(https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=1600)`,
                maskImage: `url(https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=1600)`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                boxShadow: "0 12px 48px rgba(34, 139, 230, 0.22)",
              }}
            />
            {/* Fallback image for accessibility (screen readers) */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=800"
              srcSet={
                "https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=1600 1600w"
              }
              sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 168px"
              alt="5K30 logo"
              className="sr-only"
              loading="lazy"
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-semibold text-foreground/80 transition hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-500/90 shadow-[0_10px_30px_-10px_theme(colors.brand.500/70%)]">
            <Link to="/contact">Book Free Call</Link>
          </Button>
        </div>

        {/* Mobile */}
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/5 text-foreground/90"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      {open && (
        <div className="absolute inset-x-0 top-16 z-40 border-b border-white/10 bg-background/95 px-4 pb-6 pt-4 shadow-lg backdrop-blur sm:px-6">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-2 py-2 text-base font-semibold text-foreground/80 transition hover:bg-white/5 hover:text-foreground",
                    isActive && "text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="bg-brand-500 hover:bg-brand-500/90">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book Free Call
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
