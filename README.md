# London Residential Advisors

One-page marketing site. Next.js 14 (App Router), TypeScript, Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Before launch

- **Contact form**: copy `.env.local.example` to `.env.local` and set `RESEND_API_KEY` to a
  [Resend](https://resend.com) API key — without it, enquiries are accepted but only logged,
  not emailed. Sends from Resend's shared `onboarding@resend.dev` sender to
  `team@londonresidentialadvisors.com`; verify a sending domain in Resend to send from a
  `@londonresidentialadvisors.com` address instead.
- **Copy**: all section copy and testimonials in [components/](components/) are placeholders —
  replace with real content. Contact email is set to `team@londonresidentialadvisors.com`.
- **Logo**: [components/Logo.tsx](components/Logo.tsx) is a refined recreation of the original
  sketch, built as inline SVG (no image asset). Swap in a final vector file if one gets designed.
- **Domain/SEO**: update `metadata` in [app/layout.tsx](app/layout.tsx) once a domain is set.
