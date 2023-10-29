import React, { useEffect } from 'react'
import ProjectsCard from '../cards/ProjectsCard'
import { projects } from '../../constants'

const Projects = () => {
  return (
    <div className='group flex flex-col p-2 gap-16 w-[100%] duration-150'>
      {projects.map((project, index) => (
        <ProjectsCard key={index} project={project} />
      ))}
    </div>
  )
}

export default Projects