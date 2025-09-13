import React from 'react'
import Projects from '../sections/Projects'
import Experiences from '../sections/Experiences'
import Contact from '../sections/Contact'
import SectionHeading from '../miscellaneous/SectionHeading'
import AboutSection from '../sections/AboutSection'
import Footer from '../sections/Footer'
import Skills from '../sections/Skills'

const RightSideContainer = () => {
  return (
    <div className="lg:w-1/2 lg:sticky lg:py-32 flex flex-col items-stretch justify-between">
      <section
        id="about"
        className="text-gray-400 text-3xl mb-40 flex flex-col items-center justify-center gap-8"
      >
        <SectionHeading text={'About'} />
        <AboutSection />
      </section>

      <section id="experience" className="mb-40">
        <SectionHeading text={'Experience'} />
        <Experiences />
      </section>

      <section id="skills" className="mb-40">
        <SectionHeading text={'Skills'} />
        <Skills />
      </section>

      <section id="projects" className="mb-28">
        <SectionHeading text={'Projects'} />
        <Projects />
      </section>

      <section id="contact" className="mb-40">
        <SectionHeading text={'Contact'} />
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default RightSideContainer
