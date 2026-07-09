import { useState } from "react";
import { CheckCircle2, Phone, Loader2 } from "lucide-react";
import { categories } from "@/data/categories";
import { submitLead } from "@/lib/submitLead";

interface BookingFormProps {
  preselectedService?: string;
  compact?: boolean;
  darkBg?: boolean;
}

export function BookingForm({ preselectedService, compact = false, darkBg = false }: BookingFormProps) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputCls = darkBg
    ? "w-full px-4 py-3 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
    : "w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm";

  const labelCls = darkBg
    ? "block text-xs font-bold uppercase tracking-wide mb-1.5 text-white/80"
    : "block text-xs font-bold uppercase tracking-wide mb-1.5 text-foreground/70";

  if (sent) {
    return (
      <div className={`text-center py-8 px-6 rounded-2xl ${darkBg ? "bg-white/10" : "bg-primary/5 border border-primary/20"}`}>
        <CheckCircle2 className={`h-12 w-12 mx-auto mb-3 ${darkBg ? "text-accent" : "text-primary"}`} />
        <h3 className={`font-serif font-bold text-lg mb-1 ${darkBg ? "text-white" : "text-foreground"}`}>Request Received!</h3>
        <p className={`text-sm ${darkBg ? "text-white/60" : "text-muted-foreground"}`}>We'll call you back promptly.</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    setSending(true);
    const result = await submitLead({
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      honeypot: String(fd.get("company") || ""),
      source: "BookingForm",
    });
    setSending(false);
    if (result.ok) {
      setSent(true);
    } else {
      setError(result.error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
        aria-hidden="true"
      />

      <div className={compact ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"}>
        <div>
          <label className={labelCls}>Your Name</label>
          <input name="name" required placeholder="John Smith" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Phone Number</label>
          <input name="phone" required type="tel" placeholder="(856) 000-0000" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Service Needed</label>
        <select name="service" required defaultValue={preselectedService ?? ""} className={inputCls}>
          <option value="" disabled className="text-foreground bg-background">Select a service...</option>
          {categories.map((cat) => (
            <optgroup key={cat.slug} label={`${cat.emoji} ${cat.name}`}>
              {cat.subServices.map((sub) => (
                <option key={sub.slug} value={sub.name} className="text-foreground bg-background">
                  {sub.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {error && (
        <div className={`text-xs rounded-lg px-3 py-2 ${darkBg ? "bg-red-500/20 text-red-100" : "bg-red-50 text-red-700 border border-red-200"}`}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className={`w-full font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-1 disabled:opacity-70 disabled:cursor-not-allowed ${
          darkBg ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Phone className="h-4 w-4" />}
        {sending ? "Sending..." : "Get a Free Quote →"}
      </button>

      <p className={`text-center text-xs ${darkBg ? "text-white/40" : "text-muted-foreground"}`}>
        No obligation · We call you back promptly
      </p>
    </form>
  );
}
