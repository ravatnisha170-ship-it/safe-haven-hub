import { createFileRoute } from "@tanstack/react-router";
import { Upload, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/report-incident")({
  head: () => ({ meta: [{ title: "Report Incident — Women Safety Portal" }, { name: "description", content: "Confidentially report a safety incident." }] }),
  component: Report,
});

const types = ["Harassment", "Cyber Crime", "Stalking", "Domestic Violence", "Other"];

function Report() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Report an Incident</h1>
        <p className="mt-2 text-muted-foreground">All reports are treated as confidential.</p>

        {sent ? (
          <div className="mt-10 rounded-3xl border border-border bg-card p-10 text-center shadow-soft animate-fade-in-up">
            <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
            <h2 className="mt-4 text-2xl font-bold">Report Submitted</h2>
            <p className="mt-2 text-muted-foreground">Thank you for speaking up. Your report has been received.</p>
            <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-primary px-6 py-2.5 font-semibold text-primary hover:bg-primary hover:text-primary-foreground">Submit another</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-8 space-y-4 rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Incident Type</label>
              <select required className="w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                <option value="">Select a category</option>
                {types.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Location</label>
              <input required className="w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Description</label>
              <textarea required rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Upload Image (optional)</label>
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-input bg-background px-4 py-6 text-sm text-muted-foreground hover:border-primary hover:text-primary">
                <Upload className="h-5 w-5" /> Click to upload
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-hero py-3 font-semibold text-white shadow-soft transition hover:opacity-90">
              <Send className="h-4 w-4" /> Submit Report
            </button>
          </form>
        )}
      </section>
      <Footer />
    </div>
  );
}
