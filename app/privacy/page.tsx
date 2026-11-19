import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "~/components/Footer"
import { Logo } from "~/components/Logo"

export const metadata: Metadata = {
  title: "Privacy Notice — London Residential Advisors",
  description:
    "How London Residential Advisors collects, uses and protects your personal data when you use this website or make an enquiry."
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-sans text-xl font-medium tracking-tight text-white">{title}</h2>
      <div className="mt-3 space-y-3 font-sans text-base font-normal leading-relaxed text-white/80">{children}</div>
    </section>
  )
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default function PrivacyPage() {
  return (
    <main>
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" aria-label="London Residential Advisors home">
            <Logo variant="wordmark" />
          </Link>
          <Link href="/" className="font-sans text-sm text-white/80 underline underline-offset-4 hover:text-white">
            Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-sans text-3xl font-medium tracking-tight text-white sm:text-4xl">Privacy Notice</h1>
        <p className="mt-3 font-sans text-sm text-white/60">Last updated 19 November 2026</p>

        <Section title="Who we are">
          <p>
            London Residential Advisors Ltd (company number 17386334, registered office 71-75 Shelton Street, Covent
            Garden, London WC2H 9JQ) is the controller of the personal data described in this notice. We work as an
            agent of eXp World UK Ltd (&ldquo;eXp&rdquo;).
          </p>
          <p>
            To ask us anything about your data, email{" "}
            <a className="underline underline-offset-4" href="mailto:team@londonresidentialadvisors.com">
              team@londonresidentialadvisors.com
            </a>
            .
          </p>
        </Section>

        <Section title="What we collect">
          <List
            items={[
              <>
                <strong className="font-medium text-white">Enquiry form:</strong> your name, email address, where you
                are relocating from, and your message.
              </>,
              <>
                <strong className="font-medium text-white">Emails and calls with us:</strong> what you tell us about
                your search, budget and timeline.
              </>,
              <>
                <strong className="font-medium text-white">If you become a client:</strong> identity documents, proof of
                address, source of funds, and details of the property and any mortgage, collected through eXp&rsquo;s
                onboarding and identity-check process.
              </>,
              <>
                <strong className="font-medium text-white">Technical data:</strong> our website host receives your IP
                address and basic device and browser details when you visit.
              </>
            ]}
          />
          <p>We don&rsquo;t use analytics or advertising cookies, and this website doesn&rsquo;t set cookies.</p>
        </Section>

        <Section title="Why we use it, and our legal basis">
          <List
            items={[
              <>
                <strong className="font-medium text-white">To reply to your enquiry.</strong> Legal basis: taking steps
                at your request, and legitimate interests.
              </>,
              <>
                <strong className="font-medium text-white">To act for you if you become a client.</strong> Legal basis:
                contract (your agreement is with eXp), and legal obligations.
              </>,
              <>
                <strong className="font-medium text-white">To check your identity and funds.</strong> Estate agents must
                carry out anti-money-laundering checks. Legal basis: legal obligation.
              </>,
              <>
                <strong className="font-medium text-white">To keep the website secure and working.</strong> Legal
                basis: legitimate interests.
              </>
            ]}
          />
          <p>We don&rsquo;t send marketing emails unless you have agreed to them.</p>
        </Section>

        <Section title="Who we share it with">
          <List
            items={[
              <>
                <strong className="font-medium text-white">eXp World UK Ltd</strong> and its identity-check and
                compliance providers, if you become a client.
              </>,
              <>
                <strong className="font-medium text-white">Resend,</strong> which delivers your enquiry form message to
                our inbox.
              </>,
              <>
                <strong className="font-medium text-white">Google,</strong> which provides our email system.
              </>,
              <>
                <strong className="font-medium text-white">Our website hosting provider.</strong>
              </>,
              <>
                <strong className="font-medium text-white">Solicitors, surveyors and mortgage brokers,</strong> only when
                you ask us to introduce you or you instruct them.
              </>,
              <>
                <strong className="font-medium text-white">Regulators and public authorities,</strong> such as HMRC and
                The Property Ombudsman, where the law or their rules require it.
              </>
            ]}
          />
          <p>We don&rsquo;t sell your personal data.</p>
        </Section>

        <Section title="Transfers outside the UK">
          <p>
            Some of these providers, including Resend and Google, process data outside the UK, including in the United
            States. When that happens we rely on the safeguards UK law allows, such as the UK&ndash;US data bridge or
            standard contractual clauses.
          </p>
        </Section>

        <Section title="How long we keep it">
          <List
            items={[
              <>Enquiries that don&rsquo;t go further: up to 24 months after we last spoke with you.</>,
              <>
                Client records: for as long as the law requires, including at least five years after the relationship
                ends for identity-check records.
              </>
            ]}
          />
        </Section>

        <Section title="Your rights">
          <p>
            You can ask us for a copy of your data, to correct it, to delete it, to restrict or object to how we use it,
            or to move it to another provider. Email us and we will reply within one month.
          </p>
          <p>
            If you are unhappy with how we handle your data, you can complain to the UK Information
            Commissioner&rsquo;s Office at{" "}
            <a className="underline underline-offset-4" href="https://ico.org.uk/make-a-complaint/">
              ico.org.uk/make-a-complaint
            </a>{" "}
            or on 0303 123 1113. We would appreciate the chance to put things right first.
          </p>
        </Section>

        <Section title="Changes to this notice">
          <p>If we change how we use your data, we will update this page and the date at the top.</p>
        </Section>
      </div>

      <Footer />
    </main>
  )
}
