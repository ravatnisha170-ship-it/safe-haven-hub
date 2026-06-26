import { Link } from "@tanstack/react-router";
import { Shield, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/safety-resources", label: "Safety Resources" },
  { to: "/cyber-safety", label: "Cyber Safety" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-card"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl gradient-hero text-white shadow-soft">
            <Shield className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">Women Safety Portal</span>
          <span className="sm:hidden">WSP</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-full gradient-hero px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-lg p-2 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-primary px-4 py-2 text-center text-sm font-semibold text-primary"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full gradient-hero px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
