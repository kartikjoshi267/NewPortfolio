import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Tags from '../miscellaneous/Tags'

const ProjectsCard = ({ project }) => {
  return (
    <a href={project.githubRepo} target='_blank' className='group/project-card flex flex-col-reverse lg:flex-row gap-5 items-stretch lg:items-start justify-stretch lg:justify-between h-max w-[100%] duration-150 bg-transparent lg:hover:bg-[#2231a35d] hover:!opacity-100 lg:group-hover:opacity-50 p-7 rounded-lg pointer-events-none lg:pointer-events-auto'>
      <img src={project.image} className='w-3/4 max-w-[250px] lg:min-w-[120px] lg:w-1/4 h-[125px] lg:h-[75px] rounded-lg border-2 border-transparent lg:group-hover/project-card:border-gray-400 duration-150' />
      <div className='flex flex-col gap-5 lg:w-3/4'>
        <a className='text-3xl font-semibold lg:group-hover/project-card:text-[#3aebff] duration-150 lg:pointer-events-none pointer-events-auto'>
          {project.name}
          &nbsp;&nbsp;
          <FontAwesomeIcon className='lg:group-hover/project-card:translate-x-1 lg:group-hover/project-card:-translate-y-1 -rotate-45 text-2xl duration-150' icon={faArrowRight} />
        </a>
        <p className='text-2xl text-gray-300'>{project.description}</p>
        <div className='flex flex-wrap'>
          {project?.languages?.map((lang, index) => (
            <Tags lang={lang} key={index} />
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectsCard