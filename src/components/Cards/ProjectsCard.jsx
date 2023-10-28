import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Tags from '../Tags'

const ProjectsCard = ({ project }) => {
  return (
    <a href={project.githubRepo} target='_blank' className='group/project-card flex flex-row gap-5 items-start justify-between h-max w-[100%] duration-150 bg-[#2231a35d] lg:bg-transparent lg:hover:bg-[#2231a35d] hover:!opacity-100 lg:group-hover:opacity-50 p-7 rounded-lg'>
      <img src={project.image} className='w-1/4 h-[75px] rounded-lg border-2 border-transparent lg:group-hover/project-card:border-gray-400 duration-150' />
      <div className='flex flex-col gap-5 w-3/4'>
        <h4 className='text-3xl font-semibold lg:group-hover/project-card:text-[#3aebff] duration-150'>
          {project.name}
          &nbsp;&nbsp;
          <FontAwesomeIcon className='lg:group-hover/project-card:translate-x-3 text-2xl duration-150' icon={faArrowRight} />
        </h4>
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