import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Projects from "@/components/projects"
import PastEvents from "@/components/past-events"
import OngoingEvents from "@/components/ongoing-events"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <AboutUs />
      <Projects />
      <PastEvents />
      <OngoingEvents />
      <Footer />
    </main>
  )
}

