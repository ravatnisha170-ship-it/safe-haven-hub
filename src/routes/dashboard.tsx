import { createFileRoute, Link } from "@tanstack/react-router";
import { Siren, Users, FileWarning, ShieldCheck, Clock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Women Safety Portal" }, { name: "description", content: "Your personal safety dashboard." }] }),
  component: Dashboard,
});

const cards = [
  { icon: Siren, title: "Emergency SOS", desc: "Send an instant alert.", to: "/sos", color: "from-rose-500 to-pink-500" },
  { icon: Users, title: "Trusted Contacts", desc: "Manage your circle.", to: "/trusted-contacts", color: "from-violet-500 to-fuchsia-500" },
  { icon: FileWarning, title: "Report Incident", desc: "File a confidential report.", to: "/report-incident", color: "from-indigo-500 to-blue-500" },
  { icon: ShieldCheck, title: "Cyber Safety", desc: "Learn & stay protected.", to: "/cyber-safety", color: "from-pink-500 to-rose-500" },
];

function Dashboard() {
  const [name, setName] = useState("User");
  useEffect(() => {
    try {
      const u = JSON.parse(localStorage.getItem("wsp_user") || "{}");
      if (u?.name) setName(u.name);
    } catch {}
  }, []);
  const activity = [
    { t: "Added trusted contact: Mom", time: "2h ago" },
    { t: "Viewed Cyber Safety resources", time: "Yesterday" },
    { t: "Profile created", time: "2 days ago" },
  ];
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl gradient-hero p-8 text-white shadow-soft sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-white/80">Dashboard</p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">Welcome, {name} 👋</h1>
          <p className="mt-2 max-w-2xl text-white/85">Your safety toolkit is one tap away.</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link key={c.title} to={c.to} className="card-hover group rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-soft transition group-hover:scale-110`}>
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-bold"><Clock className="h-5 w-5 text-primary" /> Recent Activity</h2>
            <ul className="mt-4 divide-y divide-border">
              {activity.map((a, i) => (
                <li key={i} className="flex items-center justify-between py-3 text-sm">
                  <span>{a.t}</span>
                  <span className="text-muted-foreground">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl gradient-soft p-6 shadow-card">
            <h2 className="font-bold">Safety Tip of the Day</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Share your live location with a trusted contact when travelling alone, especially after dark.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
