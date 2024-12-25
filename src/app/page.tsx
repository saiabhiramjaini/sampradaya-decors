import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import Events from '@/components/events'
import CustomerFeedback from '@/components/customer-feedback'
import ContactUs from '@/components/contact-us'
import Footer from '@/components/footer'
import Gallery from '@/components/gallery'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-50">
    <Navbar />
    <main>
      <HeroSection />
      <Events />
      <Gallery />
      <CustomerFeedback />
      <ContactUs />
    </main>
    <Footer />
  </div>
)
}

