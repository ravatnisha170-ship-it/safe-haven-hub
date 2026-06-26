import { createFileRoute } from "@tanstack/react-router";
import { Trash2, UserPlus, Phone, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

type Contact = { id: string; name: string; phone: string; relation: string };

export const Route = createFileRoute("/trusted-contacts")({
  head: () => ({ meta: [{ title: "Trusted Contacts — Women Safety Portal" }, { name: "description", content: "Manage your emergency contacts." }] }),
  component: Contacts,
});

const KEY = "wsp_contacts";

function Contacts() {
  const [items, setItems] = useState<Contact[]>([]);
  const [form, setForm] = useState({ name: "", phone: "", relation: "" });

  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch {}
  }, []);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(items)); }, [items]);

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    setItems([{ id: crypto.randomUUID(), ...form }, ...items]);
    setForm({ name: "", phone: "", relation: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Trusted Contacts</h1>
        <p className="mt-2 text-muted-foreground">Add people who should be alerted in an emergency.</p>

        <form onSubmit={add} className="mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-card sm:grid-cols-3">
          <input required placeholder="Contact Name" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})}
            className="rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})}
            className="rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <input required placeholder="Relationship" value={form.relation} onChange={(e)=>setForm({...form, relation: e.target.value})}
            className="rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <button className="sm:col-span-3 inline-flex items-center justify-center gap-2 rounded-full gradient-hero py-3 font-semibold text-white shadow-soft transition hover:opacity-90">
            <UserPlus className="h-4 w-4" /> Add Contact
          </button>
        </form>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.length === 0 && (
            <p className="text-muted-foreground sm:col-span-2 lg:col-span-3 text-center py-10">No contacts yet. Add your first above.</p>
          )}
          {items.map((c) => (
            <div key={c.id} className="card-hover rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full gradient-hero text-white">
                  <User className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-bold">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">{c.relation}</p>
                </div>
              </div>
              <a href={`tel:${c.phone}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Phone className="h-4 w-4" /> {c.phone}
              </a>
              <button
                onClick={() => setItems(items.filter((x) => x.id !== c.id))}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-destructive hover:underline"
              >
                <Trash2 className="h-3.5 w-3.5" /> Remove
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
