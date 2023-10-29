import React from 'react'

const SectionHeading = ({ text }) => {
  return (
    <h4 className="z-10 sticky top-0 py-5 my-0 bg-[#000d2b]  lg:hidden w-full text-white font-bold text-4xl">
      {text}
    </h4>
  )
}

export default SectionHeading
