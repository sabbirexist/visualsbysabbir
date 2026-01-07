import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "");
    const email = String(body.email ?? "");
    const message = String(body.message ?? "");

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return Response.json({ ok: false, error: "Server not configured" }, { status: 500 });
    }

    const to = process.env.CONTACT_TO_EMAIL || "visualsbysabbir.bd@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New message from ${name} (Portfolio)`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Something went wrong" }, { status: 500 });
  }
}
