import { createFileRoute } from "@tanstack/react-router";
import { UserX, KeyRound, MessageSquareWarning, Share2, ShieldAlert } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/cyber-safety")({
  head: () => ({
    meta: [
      { title: "Cyber Safety — Women Safety Portal" },
      { name: "description", content: "Learn about fake profiles, password security, online harassment and how to report cyber crime." },
    ],
  }),
  component: Cyber,
});

const items = [
  { icon: UserX, title: "Fake Profile Awareness", desc: "Spot impersonation, catfishing and social engineering." },
  { icon: KeyRound, title: "Password Security", desc: "Strong passwords, password managers & 2FA explained." },
  { icon: MessageSquareWarning, title: "Online Harassment", desc: "Know your rights and how to document & block abuse." },
  { icon: Share2, title: "Social Media Safety", desc: "Privacy settings, oversharing risks and digital hygiene." },
  { icon: ShieldAlert, title: "Cyber Crime Reporting", desc: "File complaints with the National Cyber Crime Portal." },
];

function Cyber() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader eyebrow="Cyber Safety" title="Stay Safe Online" subtitle="Practical knowledge to protect your digital life." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div key={c.title} className="card-hover rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/15 text-secondary">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl gradient-hero p-8 text-white shadow-soft sm:p-12">
          <h3 className="text-2xl font-bold sm:text-3xl">Report Cyber Crime Instantly</h3>
          <p className="mt-2 max-w-2xl text-white/90">
            Call the national cyber crime helpline 1930 or visit cybercrime.gov.in to file a complaint.
          </p>
          <a
            href="tel:1930"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-primary shadow-soft transition hover:scale-105"
          >
            Call 1930
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
