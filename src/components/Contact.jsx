import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-3xl gap-4">
      <FontAwesomeIcon icon={faMessage} className="text-9xl mt-8 lg:text-8xl" />
      <p className="hidden lg:block font-semibold lg:text-5xl mb-16">You can reach out to me</p>
      <button className="lg:bg-green-950 bg-green-600 cursor-pointer p-3 rounded-lg text-3xl hover:bg-green-600 duration-200">
        <a href="mailto:kartikjoshi267@gmail.com">Say Hello 👋</a>
      </button>
    </div>
  )
}

export default Contact
