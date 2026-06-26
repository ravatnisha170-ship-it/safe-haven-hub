import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, ShieldCheck, Heart, Users, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Women Safety Portal" },
      { name: "description", content: "Our mission, vision and why women's safety matters." },
      { property: "og:title", content: "About — Women Safety Portal" },
      { property: "og:description", content: "Our mission, vision and why women's safety matters." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        eyebrow="About Us"
        title="Building a Safer World for Women"
        subtitle="We combine emergency assistance, education, and community to empower women everywhere."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", desc: "Provide every woman immediate access to safety tools, trusted help and reliable information whenever it matters most." },
            { icon: Eye, title: "Our Vision", desc: "A society where no woman has to compromise her freedom, ambition, or dignity out of fear for her safety." },
          ].map((c) => (
            <div key={c.title} className="card-hover rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-hero text-white shadow-soft">
                <c.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">{c.title}</h2>
              <p className="mt-3 text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold">Why Women's Safety Matters</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Safety is the foundation of opportunity. When women feel safe, communities thrive — economically,
            socially, and culturally. Our platform brings together prevention, response and empowerment.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Prevention" },
              { icon: Heart, title: "Support" },
              { icon: Users, title: "Community" },
              { icon: Sparkles, title: "Empowerment" },
            ].map((p) => (
              <div key={p.title} className="card-hover rounded-2xl bg-card p-6 text-center shadow-card">
                <p.icon className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 font-bold">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
