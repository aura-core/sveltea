import RevealProvider from '@/components/RevealProvider'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import VideoSection from '@/components/VideoSection'
import QueEs from '@/components/QueEs'
import Presentations from '@/components/Presentations'
import ComoFunciona from '@/components/ComoFunciona'
import Applications from '@/components/Applications'
import Evidence from '@/components/Evidence'
import ProZone from '@/components/ProZone'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <RevealProvider>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <VideoSection />
        <QueEs />
        <Presentations />
        <ComoFunciona />
        <Applications />
        <Evidence />
        <ProZone />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </RevealProvider>
  )
}
