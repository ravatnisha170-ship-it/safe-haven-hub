import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { FormInput } from "./login";
import { useState } from "react";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Register — Women Safety Portal" }, { name: "description", content: "Create your Women Safety Portal account." }] }),
  component: Register,
});

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "", confirm: "" });
  const [err, setErr] = useState("");

  return (
    <div className="grid min-h-screen place-items-center gradient-soft px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-border bg-card p-8 shadow-soft">
        <Link to="/" className="mx-auto flex w-fit items-center gap-2 font-display font-bold">
          <span className="grid h-10 w-10 place-items-center rounded-xl gradient-hero text-white"><Shield className="h-5 w-5" /></span>
        </Link>
        <h1 className="mt-6 text-center text-3xl font-bold">Create Your Account</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">Join a community committed to safety & empowerment</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (form.password !== form.confirm) { setErr("Passwords do not match"); return; }
            localStorage.setItem("wsp_user", JSON.stringify({ name: form.name, email: form.email }));
            navigate({ to: "/dashboard" });
          }}
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-2"><FormInput label="Full Name" required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} /></div>
          <FormInput label="Email" type="email" required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} />
          <FormInput label="Mobile Number" type="tel" required value={form.mobile} onChange={(e)=>setForm({...form, mobile: e.target.value})} />
          <FormInput label="Password" type="password" required value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} />
          <FormInput label="Confirm Password" type="password" required value={form.confirm} onChange={(e)=>setForm({...form, confirm: e.target.value})} />
          {err && <p className="sm:col-span-2 text-sm text-destructive">{err}</p>}
          <button className="sm:col-span-2 w-full rounded-full gradient-hero py-3 font-semibold text-white shadow-soft transition hover:opacity-90">Register</button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="font-semibold text-primary hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
