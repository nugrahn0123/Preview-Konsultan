'use client'

import { useRevealAnimation } from '@/app/hooks/useRevealAnimation'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Services from '@/app/components/Services'
import Trust from '@/app/components/Trust'
import Insight from '@/app/components/Insight'
import Location from '@/app/components/Location'
import Booking from '@/app/components/Booking'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

export default function Home() {
  useRevealAnimation()

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Trust />
      <Insight />
      <Location />
      <Booking />
      <Contact />
      <Footer />
    </>
  )
}
