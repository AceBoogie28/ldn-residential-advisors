import { Header } from "~/components/Header"
import { Hero } from "~/components/Hero"
import { Journey } from "~/components/Journey"
import { Pillars } from "~/components/Pillars"
import { Services } from "~/components/Services"
import { Testimonials } from "~/components/Testimonials"
import { Contact } from "~/components/Contact"
import { Footer } from "~/components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Journey />
      <Pillars />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
