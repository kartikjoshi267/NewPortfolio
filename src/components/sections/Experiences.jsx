import React from 'react'
import ExperienceCard from '../card/ExperienceCard'
import { experiences } from '../../constants'

const Experiences = () => {
  return (
    <div className='group flex flex-col p-2 gap-16 w-[100%] duration-150'>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </div>
  )
}

export default Experiences