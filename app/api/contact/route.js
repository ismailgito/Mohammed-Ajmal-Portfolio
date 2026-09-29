const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const MAX_LEN = { name: 100, email: 150, message: 2000 };

export async function POST(request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return Response.json(
      { success: false, message: "Form is not configured yet." },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  // Honeypot: bots fill this hidden field, humans never see it.
  if (body.botcheck) return Response.json({ success: true });

  if (
    !name ||
    !message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    name.length > MAX_LEN.name ||
    email.length > MAX_LEN.email ||
    message.length > MAX_LEN.message
  ) {
    return Response.json(
      { success: false, message: "Please fill in all fields correctly." },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio enquiry from ${name}`,
        from_name: "Portfolio Website",
        name,
        email,
        message,
      }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return Response.json(
        { success: false, message: data.message || "Could not send message." },
        { status: 502 },
      );
    }
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, message: "Network error. Please try again." },
      { status: 502 },
    );
  }
}
