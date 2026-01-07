import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "visualsbysabbir.bd@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!resendKey) {
      return Response.json({ ok: false, error: "RESEND_API_KEY missing" }, { status: 500 });
    }

    // Force you to configure FROM properly so it doesn't silently fail
    if (!from) {
      return Response.json({ ok: false, error: "CONTACT_FROM_EMAIL missing" }, { status: 500 });
    }

    const resend = new Resend(resendKey);

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New message from ${name} (Portfolio)`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    // Many Resend SDK versions: { data, error }
    // @ts-ignore
    if (result?.error) {
      // @ts-ignore
      return Response.json(
        { ok: false, error: result.error?.message || "Resend error" },
        { status: 500 }
      );
    }

    // @ts-ignore
    return Response.json({ ok: true, id: result?.data?.id || null });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
