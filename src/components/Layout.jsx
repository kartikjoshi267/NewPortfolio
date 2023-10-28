import React, { useEffect } from 'react'
import LeftSideContainer from './LeftSideContainer'
import RightSideContainer from './RightSideContainer'
import { navLinks } from '../constants'

const Layout = () => {
  useEffect(() => {
    window.onscroll = () => {
      var current = ''

      document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop - 250
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id')
        }
      })

      document.querySelectorAll('.navLink').forEach((li, index) => {
        li.classList.remove('opacity-100')
        li.classList.add('opacity-50')
        li.querySelector('.nav-line').classList.remove('w-[70px]')

        if (navLinks[index].path.find((e) => e.slice(2) === current)) {
          li.classList.remove('opacity-50')
          li.classList.add('opacity-100')
          li.querySelector('.nav-line').classList.add('w-[70px]')
        }
      })
    }
  })

  return (
    <div className="p-[7%] flex flex-col lg:flex-row gap-16 lg:gap-4 justify-between lg:px-[15%] lg:py-0 min-h-screen">
      <LeftSideContainer />
      <RightSideContainer />
    </div>
  )
}

export default Layout
