import React from 'react'
import Cta from '../components/Cta'
import Hero from '../components/Hero'
import Lottery from '../components/Lottery'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Faq from '../components/Faq'
import Partners from '../components/Partners'
import Artlux from '../components/Artlux'
import Roadmap from '../components/Roadmap'
import Features from '../components/Features'

const Home = () => {
  return (
    <PrimaryLayout>
      <Hero />
      <Cta />
      <Features />
      <Lottery />
      <Partners />
      <Artlux />
      <Roadmap />
      <Faq />
    </PrimaryLayout>
  )
}

export default Home