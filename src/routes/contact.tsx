import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Women Safety Portal" },
      { name: "description", content: "Get in touch with the Women Safety Portal team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader eyebrow="Contact" title="We're Here to Help" subtitle="Reach out for support, partnerships or feedback." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          {[
            { icon: Mail, label: "Email", val: "support@womensafety.org" },
            { icon: Phone, label: "Helpline", val: "+91 1091" },
            { icon: MapPin, label: "Location", val: "Available 24×7 across India" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-hero text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <p className="text-lg font-semibold">{c.val}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            (e.target as HTMLFormElement).reset();
          }}
          className="rounded-3xl border border-border bg-card p-8 shadow-card"
        >
          <h2 className="text-2xl font-bold">Send a Message</h2>
          <div className="mt-6 space-y-4">
            <Field label="Your Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea required rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full gradient-hero px-6 py-3 font-semibold text-white shadow-soft transition hover:opacity-90">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && <p className="text-sm font-medium text-primary">Thanks! We'll get back to you soon.</p>}
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
