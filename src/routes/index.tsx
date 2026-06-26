import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Siren, Users, ShieldCheck, FileWarning, HeartHandshake, Megaphone,
  Lock, Sparkles, Phone, Stethoscope, ShieldAlert, Globe, ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero-illustration.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Women Safety Portal — Your Safety, Our Priority" },
      { name: "description", content: "Stay Safe. Stay Strong. Stay Connected. Emergency SOS, trusted contacts, cyber safety and empowerment in one portal." },
      { property: "og:title", content: "Women Safety Portal — Your Safety, Our Priority" },
      { property: "og:description", content: "Emergency SOS, trusted contacts, cyber safety and empowerment in one portal." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Siren, title: "Emergency SOS", desc: "One tap to alert your trusted contacts with your live location.", to: "/sos" },
  { icon: Users, title: "Trusted Contacts", desc: "Save people who matter most for instant emergency outreach.", to: "/trusted-contacts" },
  { icon: ShieldCheck, title: "Cyber Safety", desc: "Stay protected online — learn, prevent and respond.", to: "/cyber-safety" },
  { icon: FileWarning, title: "Incident Reporting", desc: "Report incidents confidentially with location and details.", to: "/report-incident" },
];

const whyUs = [
  { icon: ShieldAlert, title: "Emergency Assistance", desc: "Fast, reliable SOS workflow built for real-life emergencies." },
  { icon: Megaphone, title: "Community Awareness", desc: "Education and resources to build safer neighbourhoods." },
  { icon: Lock, title: "Cyber Protection", desc: "Defend against fake profiles, scams, and online harassment." },
  { icon: Sparkles, title: "Empowerment Resources", desc: "Confidence, communication, and self-defence content." },
];

const stats = [
  { value: 10000, suffix: "+", label: "Women Reached" },
  { value: 500, suffix: "+", label: "Safety Resources" },
  { value: 24, suffix: "/7", label: "Support Available" },
  { value: 100, suffix: "%", label: "Responsive Platform" },
];

const helplines = [
  { icon: HeartHandshake, name: "Women Helpline", number: "1091" },
  { icon: ShieldAlert, name: "Police", number: "100" },
  { icon: Stethoscope, name: "Ambulance", number: "102" },
  { icon: Globe, name: "Cyber Crime", number: "1930" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1500;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setV(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-soft" />
        <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Empowering Women Everyday
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Your Safety, <span className="text-gradient">Our Priority</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Stay Safe. Stay Strong. Stay Connected. A complete platform for emergency support,
              cyber safety, and women empowerment — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/sos"
                className="inline-flex items-center gap-2 rounded-full bg-emergency px-6 py-3 text-sm font-bold text-emergency-foreground shadow-soft transition hover:scale-[1.03]"
              >
                <Siren className="h-4 w-4" /> Emergency SOS
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-white/60 px-6 py-3 text-sm font-semibold text-primary backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl gradient-hero opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Diverse women standing together — empowerment & safety"
              width={1280}
              height={1024}
              className="rounded-3xl shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Everything You Need to Stay Safe</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Powerful tools designed with women's safety in mind.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="card-hover group rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-white shadow-soft transition group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="gradient-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">Why Choose Us</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">More Than Just an SOS App</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div key={w.title} className="card-hover rounded-2xl bg-card p-6 shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/15 text-secondary">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl gradient-hero p-10 text-center text-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-extrabold sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/85">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HELPLINES */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Emergency Helplines</h2>
          <p className="mt-3 text-muted-foreground">Save these numbers. Share with the women in your life.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helplines.map((h) => (
            <a
              key={h.name}
              href={`tel:${h.number}`}
              className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emergency/10 text-emergency">
                <h.icon className="h-7 w-7" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{h.name}</p>
                <p className="flex items-center gap-1.5 text-2xl font-bold">
                  <Phone className="h-4 w-4 text-primary" /> {h.number}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
