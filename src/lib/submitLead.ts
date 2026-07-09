export interface LeadPayload {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone: string;
  service?: string;
  message?: string;
  source?: string;
  honeypot?: string;
}

export async function submitLead(
  payload: LeadPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      }),
    });
    const json = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };
    if (!res.ok || !json.ok) {
      return {
        ok: false,
        error: json.error ?? "Couldn't send your message. Please call us instead.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Network error. Please call us at (856) 588-0580.",
    };
  }
}
