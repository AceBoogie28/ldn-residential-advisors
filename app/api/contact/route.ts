import { NextResponse } from "next/server"

interface ContactPayload {
  name: string
  email: string
  origin?: string
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: Partial<ContactPayload>
  try {
    body = (await request.json()) as Partial<ContactPayload>
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const origin = typeof body.origin === "string" ? body.origin.trim() : undefined
  const message = typeof body.message === "string" ? body.message.trim() : ""

  if (!name || !EMAIL_PATTERN.test(email) || !message) {
    return NextResponse.json({ error: "Name, a valid email, and a message are required" }, { status: 400 })
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL

  // No email provider has been chosen yet, so enquiries are relayed to an external
  // webhook (e.g. a Resend/Zapier/Slack integration) rather than sent directly. If
  // the webhook isn't configured, still return success so local dev/build doesn't
  // require one — but log so the gap is visible.
  if (!webhookUrl) {
    console.warn("CONTACT_WEBHOOK_URL is not set — enquiry was not forwarded", { name, email, origin })
    return NextResponse.json({ ok: true })
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, origin, message, submittedAt: new Date().toISOString() })
    })

    if (!webhookResponse.ok) {
      console.error("Contact webhook responded with an error", webhookResponse.status)
      return NextResponse.json({ error: "Could not reach the enquiry service" }, { status: 502 })
    }
  } catch (err) {
    console.error("Failed to forward contact enquiry", err)
    return NextResponse.json({ error: "Could not reach the enquiry service" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
