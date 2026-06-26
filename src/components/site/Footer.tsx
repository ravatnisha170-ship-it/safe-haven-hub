import { Link } from "@tanstack/react-router";
import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold font-display">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-hero">
              <Shield className="h-5 w-5" />
            </span>
            Women Safety Portal
          </div>
          <p className="mt-4 text-sm text-background/70">
            Empowering women through safety, awareness, and community support.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid h-9 w-9 place-items-center rounded-full bg-background/10 transition hover:bg-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li><Link to="/about" className="hover:text-secondary">About</Link></li>
            <li><Link to="/safety-resources" className="hover:text-secondary">Safety Resources</Link></li>
            <li><Link to="/cyber-safety" className="hover:text-secondary">Cyber Safety</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> support@womensafety.org</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> +91 1091 (Women Helpline)</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Available 24×7 across India</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-secondary">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-secondary">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-5 text-center text-xs text-background/60">
        © {new Date().getFullYear()} Women Safety Portal. All rights reserved.
      </div>
    </footer>
  );
}
