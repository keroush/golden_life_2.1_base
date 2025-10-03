import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GlobalPresence from '@/components/GlobalPresence'
import OurServices from '@/components/OurServices'
import IconicBuildings from '@/components/IconicBuildings'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <GlobalPresence />
      <OurServices />
      <IconicBuildings />
      <Footer />
    </main>
  )
}
