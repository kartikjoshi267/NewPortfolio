import React from 'react'

const ExperienceCard = ({ experience }) => {
  return (
    <div className='experience-card flex flex-row gap-5 items-start justify-start h-max w-[100%] duration-150 bg-[#2231a35d] lg:bg-transparent lg:hover:bg-[#2231a35d] lg:hover:!opacity-100 lg:group-hover:opacity-50 p-4 rounded-lg'>
      <div className='text-xl text-gray-400'>{experience.start} - {experience.end}</div>
      <div className='flex flex-col gap-2 w-3/5'>
        <h4 className='text-3xl font-semibold'>
          {experience.designation} · {experience.organization}
        </h4>
        <p className='text-2xl text-gray-200'>{experience.designation}</p>
        <p className='text-2xl text-gray-300'>{experience.organization}</p>
        <p className='text-2xl text-gray-400'>{experience.description}</p>
        <div className='flex flex-wrap'>
          {experience?.languages?.map((lang, index) => (
            <Tags lang={lang} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard