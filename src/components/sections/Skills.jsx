import React from 'react'
import { skills } from '../../constants';

const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap lg:gap-7 gap-4">
      {skills.map((Icon, index) => (
        <Icon key={index} size={50} className="bg-white rounded-full p-2" />
      ))}
    </div>
  )
}

export default Skills
