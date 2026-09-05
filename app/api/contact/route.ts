import { NextResponse } from "next/server"

interface ContactPayload {
  name: string
  email: string
  origin?: string
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const NOTIFY_EMAIL = "team@londonresidentialadvisors.com"

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

  const resendApiKey = process.env.RESEND_API_KEY

  // Enquiries are emailed directly via Resend. If the key isn't configured,
  // still return success so local dev/build doesn't require one — but log so
  // the gap is visible.
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY is not set — enquiry was not emailed", { name, email, origin })
    return NextResponse.json({ ok: true })
  }

  const text = [
    "New enquiry from the website:",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    origin ? `Relocating from: ${origin}` : null,
    "",
    "Message:",
    message
  ]
    .filter((line) => line !== null)
    .join("\n")

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "London Residential Advisors <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        text
      })
    })

    if (!emailResponse.ok) {
      console.error("Resend responded with an error", emailResponse.status, await emailResponse.text())
      return NextResponse.json({ error: "Could not send the enquiry email" }, { status: 502 })
    }
  } catch (err) {
    console.error("Failed to send contact enquiry email", err)
    return NextResponse.json({ error: "Could not send the enquiry email" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
