import React from 'react'
import { socialHandles } from '../../constants'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../Navbar'
import SocialHandles from '../sections/SocialHandles'
import IntroSection from '../sections/IntroSection'

const LeftSideContainer = () => {
  const locationHook = useLocation()

  return (
    <header className="lg:w-1/2 lg:sticky lg:py-32 lg:flex flex-col items-stretch justify-between max-h-screen top-0 gap-16 lg:gap-0">
      <div className="flex gap-32 flex-col items-start">
        <IntroSection />
        <Navbar locationHook={locationHook} />
      </div>
      <SocialHandles />
    </header>
  )
}

export default LeftSideContainer
