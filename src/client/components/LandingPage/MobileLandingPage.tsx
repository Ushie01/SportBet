import React from 'react'
import MobileCarousel from './components/MobileView/MobileAdvert'
import Header from '../../shared/Header'
import SportBetCategory from './components/MobileView/SportBetCategory'
import PopularCategory from './components/MobileView/PopularSection'

const MobileLandingPage = () => {
  return (
    <>
      <Header/>
      <MobileCarousel/>
      <SportBetCategory/>
      <PopularCategory/>
    </>
  )
}

export default MobileLandingPage
