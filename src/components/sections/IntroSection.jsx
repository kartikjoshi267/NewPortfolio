import React from 'react'
import { Link } from 'react-router-dom'

const IntroSection = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      <Link
        to={'/'}
        className="heading text-8xl stroke-white fill-none font-bold"
      >
        Kartik Joshi
      </Link>
      <h2 className="mt-4 text-4xl font-semibold">Associate Software Engineer (SAP ABAP)</h2>
      <p className="mt-10 text-3xl text-gray-400 w-3/4">
        I build business applications using SAP ABAP and other technologies.
      </p>
    </div>
  )
}

export default IntroSection
