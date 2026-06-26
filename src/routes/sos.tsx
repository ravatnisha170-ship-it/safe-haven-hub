import { createFileRoute } from "@tanstack/react-router";
import { Siren, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/sos")({
  head: () => ({ meta: [{ title: "Emergency SOS — Women Safety Portal" }, { name: "description", content: "Send an emergency SOS alert with your location." }] }),
  component: SOS,
});

function SOS() {
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const detect = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation(`${pos.coords.latitude.toFixed(5)}, ${pos.coords.longitude.toFixed(5)}`),
      () => setLocation("Unable to detect location"),
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-emergency/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emergency">Emergency</span>
          <h1 className="mt-3 text-4xl font-bold">Send an SOS Alert</h1>
          <p className="mt-2 text-muted-foreground">Your trusted contacts will be notified instantly.</p>
        </div>

        {sent ? (
          <div className="mt-10 rounded-3xl border border-border bg-card p-10 text-center shadow-soft animate-fade-in-up">
            <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
            <h2 className="mt-4 text-2xl font-bold">SOS Sent Successfully</h2>
            <p className="mt-2 text-muted-foreground">Help is on the way. Stay calm and stay safe.</p>
            <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-primary px-6 py-2.5 font-semibold text-primary hover:bg-primary hover:text-primary-foreground">Send another</button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <label className="mb-1.5 block text-sm font-medium">Current Location</label>
            <div className="flex gap-2">
              <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Type address or use GPS"
                className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <button type="button" onClick={detect} className="inline-flex items-center gap-1.5 rounded-xl border border-primary px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                <MapPin className="h-4 w-4" /> Detect
              </button>
            </div>

            <label className="mb-1.5 mt-5 block text-sm font-medium">Emergency Message</label>
            <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
              placeholder="Briefly describe the situation..."
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />

            <button
              type="submit"
              className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-emergency py-5 text-lg font-extrabold text-emergency-foreground shadow-soft transition hover:scale-[1.02] hover:bg-emergency/90"
            >
              <Siren className="h-6 w-6 animate-pulse" /> SEND SOS ALERT
            </button>
          </form>
        )}
      </section>
      <Footer />
    </div>
  );
}
