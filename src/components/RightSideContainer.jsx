import React from 'react'
import Projects from './Projects'
import Experiences from './Experiences'
import Contact from './Contact'
import SectionHeading from './SectionHeading'
import AboutSection from './AboutSection'
import Footer from './Footer'

const RightSideContainer = () => {
  return (
    <div className="lg:w-1/2 lg:sticky lg:py-32 flex flex-col items-stretch justify-between">
      <section
        id="about"
        className="text-gray-400 text-3xl mb-40 flex flex-col items-center justify-center gap-8"
      >
        <SectionHeading text={"About"} />
        <AboutSection />
      </section>

      <section id="experience" className="mb-40">
      <SectionHeading text={"Experience"} />
        <Experiences />
      </section>

      <section id="projects" className="mb-28">
      <SectionHeading text={"Projects"} />
        <Projects />
      </section>

      <section id="contact" className="mb-40">
      <SectionHeading text={"Contact"} />
      <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default RightSideContainer
