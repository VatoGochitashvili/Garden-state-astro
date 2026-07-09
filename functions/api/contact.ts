interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface LeadPayload {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
  honeypot?: string;
  pageUrl?: string;
}

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  // Honeypot — silently succeed so bots don't learn anything
  if (payload.honeypot) {
    return json({ ok: true }, 200);
  }

  const phone = (payload.phone ?? "").trim();
  if (!phone || phone.length < 7) {
    return json({ ok: false, error: "A valid phone number is required." }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: "Couldn't send your message. Please call us instead." }, 503);
  }

  const name = payload.name || [payload.firstName, payload.lastName].filter(Boolean).join(" ") || "Website visitor";
  const toEmail = env.CONTACT_TO_EMAIL || "info@gardenstatelocksmithnj.com";
  const fromEmail = env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  const lines = [
    `New lead from gardenstatelocksmithnj.com`,
    `Source: ${payload.source ?? "Unknown"}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    payload.email ? `Email: ${payload.email}` : null,
    payload.service ? `Service: ${payload.service}` : null,
    payload.message ? `Message: ${payload.message}` : null,
    payload.pageUrl ? `Page: ${payload.pageUrl}` : null,
  ].filter(Boolean);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Garden State Locksmith Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: payload.email || undefined,
        subject: `New lead: ${name} (${phone})`,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      return json({ ok: false, error: "Couldn't send your message. Please call us instead." }, 502);
    }

    return json({ ok: true }, 200);
  } catch {
    return json({ ok: false, error: "Couldn't send your message. Please call us instead." }, 502);
  }
};

export const onRequestGet: PagesFunction = async () => {
  return json({ ok: false, error: "Method not allowed" }, 405);
};
