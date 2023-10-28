import React from 'react'
import { navLinks } from '../constants'

const Navbar = ({ locationHook }) => {
  return (
    <nav className="hidden lg:block w-max navbar">
          {navLinks.map((link, index) => {
            return (
              <a
                href={`${ link.path[0] }`}
                key={index}
                className={`group navLink w-full flex items-center ${
                  index !== navLinks.length - 1 ? 'pb-8' : ''
                } cursor-pointer hover:opacity-100 ${ !link.path.find(e => e === locationHook.pathname + locationHook.hash) ? 'opacity-50' : 'opacity-100' } duration-200`}
              >
                <span className={`nav-line w-[40px] h-[1.5px] bg-white mr-10 group-hover:w-[70px] ${ !link.path.find(e => e === locationHook.pathname + locationHook.hash) ? '' : 'w-[70px]' } duration-200`}></span>
                <span
                  className="text-xl font-semibold text-right"
                  style={{ letterSpacing: '2px' }}
                >
                  {link.name}
                </span>
              </a>
            )
          })}
        </nav>
  )
}

export default Navbar