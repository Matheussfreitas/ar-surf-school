import { Classes } from './components/Classes'
import { Footer } from './components/Footer'
import { Founder } from './components/Founder'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { Pricing } from './components/Pricing'
import { Structure } from './components/Structure'
import { Team } from './components/Team'
import { Ticker } from './components/Ticker'
import { WhyUs } from './components/WhyUs'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <WhyUs />
        <Founder />
        <Team />
        <Structure />
        <Classes />
        <Pricing />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
