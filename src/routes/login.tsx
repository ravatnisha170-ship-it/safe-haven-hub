import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Women Safety Portal" }, { name: "description", content: "Login to your Women Safety Portal account." }] }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  return (
    <div className="grid min-h-screen place-items-center gradient-soft px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-soft">
        <Link to="/" className="mx-auto flex w-fit items-center gap-2 font-display font-bold">
          <span className="grid h-10 w-10 place-items-center rounded-xl gradient-hero text-white"><Shield className="h-5 w-5" /></span>
        </Link>
        <h1 className="mt-6 text-center text-3xl font-bold">Welcome Back</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">Login to access your safety dashboard</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem("wsp_user", JSON.stringify({ email, name: email.split("@")[0] }));
            navigate({ to: "/dashboard" });
          }}
          className="mt-8 space-y-4"
        >
          <FormInput label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormInput label="Password" type="password" required />
          <div className="text-right">
            <a href="#" className="text-xs font-medium text-primary hover:underline">Forgot Password?</a>
          </div>
          <button className="w-full rounded-full gradient-hero py-3 font-semibold text-white shadow-soft transition hover:opacity-90">Login</button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here? <Link to="/register" className="font-semibold text-primary hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export function FormInput({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
