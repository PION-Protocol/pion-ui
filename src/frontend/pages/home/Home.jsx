import React from 'react'
import Hero from './hero/Hero'
import Cta from './cta/Cta'
import Cta2 from './cta/Cta2'
import Community from './community/Community'
import HowItWorks from './howItWorks/HowItWorks'
import CusinoProcess from './cusinoProcess/CusinoProcess'
import Security from './security/Security'
import CommunityTreasury from './communityTreasury/CommunityTreasury'
import Community2 from './community/Community2'

const Home = () => {
  return (
    <>
    <Hero/>
    <Cta/>
    <CusinoProcess/>
    <Community/>
    <Cta2/>
    <HowItWorks/>
    <Security/>
    <CommunityTreasury/>
    <Community2/>
    </>
  )
}

export default Home