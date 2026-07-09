import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/lib/submitLead";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    setSending(true);
    const result = await submitLead({
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
      honeypot: String(fd.get("company") || ""),
      source: "Contact Page",
    });
    setSending(false);
    if (result.ok) {
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setError(result.error);
    }
  }

  if (sent) {
    return (
      <div className="text-center py-10 px-4 rounded-xl bg-primary/5 border border-primary/20">
        <CheckCircle2 className="h-14 w-14 mx-auto mb-4 text-primary" />
        <h3 className="font-serif font-bold text-xl mb-2 text-foreground">Message Sent!</h3>
        <p className="text-sm text-muted-foreground mb-4">Thanks for reaching out — we'll get back to you promptly.</p>
        <p className="text-sm text-muted-foreground">
          For immediate help, call <a href="tel:8565880580" className="text-primary font-bold hover:underline">(856) 588-0580</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }} aria-hidden="true" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
          <Input id="firstName" name="firstName" required placeholder="John" />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
          <Input id="lastName" name="lastName" placeholder="Doe" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
        <Input id="phone" name="phone" type="tel" required placeholder="(856) 000-0000" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium">Service Needed</label>
        <select id="service" name="service" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <option value="">Select a service...</option>
          <option value="Residential Locksmith">Residential Locksmith</option>
          <option value="Commercial Locksmith">Commercial Locksmith</option>
          <option value="Automotive Locksmith">Automotive Locksmith</option>
          <option value="Emergency / Lockout">Emergency / Lockout</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <Textarea id="message" name="message" placeholder="How can we help you?" rows={4} />
      </div>
      {error && (
        <div className="text-sm rounded-lg px-3 py-2 bg-red-50 text-red-700 border border-red-200">{error}</div>
      )}
      <Button type="submit" size="lg" disabled={sending} className="w-full font-bold">
        {sending ? (<><Loader2 className="h-4 w-4 mr-2 animate-spin" />Sending...</>) : "Send Message"}
      </Button>
      <p className="text-xs text-muted-foreground text-center mt-4">
        For immediate assistance, please call us directly.
      </p>
    </form>
  );
}
