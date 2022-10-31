import React from 'react'
import Gateway from '../components/Elements/Gateway'
import Hero from '../components/Elements/Hero'
import Invest from '../components/Elements/Invest'
import Roadmap from '../components/Elements/Roadmap'
import Token from '../components/Elements/Token'
import Value from '../components/Elements/Value'
import Faqs from '../components/Utils/Faqs'

const Home = () => {
  return (
    <>
      <Hero/>
      <Invest/>
      <Gateway/>
      <Token/>
      <Value/>
      <Roadmap/>
      <Faqs/>
    </>
  )
}

export default Home