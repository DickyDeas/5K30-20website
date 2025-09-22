import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/90">
            <div
              aria-hidden
              className="w-14 h-10 rounded-md bg-[hsl(var(--brand-500))]"
              style={{
                WebkitMaskImage: `url(https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=1200)`,
                maskImage: `url(https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=1200)`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                boxShadow: "0 8px 28px rgba(34, 139, 230, 0.12)",
              }}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe3ae173b79f74e84b0580a7f82f9aa6c%2F302b7f2663814c4f98428198fb338857?format=webp&width=800"
              alt="5K30"
              className="sr-only"
            />
          </Link>
          <p className="text-center text-xs text-foreground/60">
            © {new Date().getFullYear()} 5K30. Your MVP in 30 days for £5,000.
          </p>
        </div>
      </div>
    </footer>
  );
}
