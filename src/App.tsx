import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import ScreeningProcess from './components/ScreeningProcess'
import Metrics from './components/Metrics'
import Comparison from './components/Comparison'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <ScreeningProcess />
        <HowItWorks />
        <Metrics />
        <Comparison />
        <Testimonials />


        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
