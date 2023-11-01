import React from 'react'
import ExperienceCard from '../card/ExperienceCard'
import { experiences } from '../../constants'
import { resumeLink } from '../../constants/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Experiences = () => {
  return (
    <>
      <div className='group flex flex-col p-2 gap-16 w-[100%] duration-150'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>

      <div className='w-full text-3xl font-semibold mt-6'>
        <a href={resumeLink} target='_blank' className="text-white group/resume">
          <span className='border-b-4 border-transparent group-hover/resume:border-[#3aebff] duration-150'>View Full Résumé</span>
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl group-hover/resume:translate-x-4 duration-150" />
        </a>
      </div>
    </>
  )
}

export default Experiences