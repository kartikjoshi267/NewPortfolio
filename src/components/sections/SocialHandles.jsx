import React from 'react'
import { socialHandles } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialHandles = () => {
  return (
    <div className="h-20 flex">
      {socialHandles.map((social, index) => (
        <a
          href={social.url}
          key={index}
          target="_blank"
          className="p-7 text-4xl text-gray-400 hover:text-white translate-x-0 hover:-translate-y-2 duration-200 w-max h-fit"
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  )
}

export default SocialHandles
