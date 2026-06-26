import { createFileRoute } from "@tanstack/react-router";
import { Shield, Plane, AlertTriangle, Sparkles, MessageCircle, Star } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/safety-resources")({
  head: () => ({
    meta: [
      { title: "Safety Resources — Women Safety Portal" },
      { name: "description", content: "Self defence, travel safety, confidence building and personal development resources for women." },
    ],
  }),
  component: Resources,
});

const items = [
  { icon: Shield, title: "Self Defence Tips", desc: "Practical techniques to protect yourself in critical moments." },
  { icon: Plane, title: "Travel Safety", desc: "Smart habits for safer commutes and journeys, day or night." },
  { icon: AlertTriangle, title: "Emergency Preparedness", desc: "Build a personal safety plan and emergency response kit." },
  { icon: Sparkles, title: "Confidence Building", desc: "Mindset and habits to feel strong, assertive and in control." },
  { icon: MessageCircle, title: "Communication Skills", desc: "Speak with clarity, set boundaries and ask for help." },
  { icon: Star, title: "Personal Development", desc: "Grow your career, finances and well-being with curated guides." },
];

function Resources() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        eyebrow="Resources"
        title="Empower Yourself"
        subtitle="Curated resources for safety, confidence and personal growth."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <article key={r.title} className="card-hover rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-white shadow-soft">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              <button className="mt-5 text-sm font-semibold text-primary hover:underline">Read more →</button>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
