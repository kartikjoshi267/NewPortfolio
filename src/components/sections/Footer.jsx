import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-10 mb-20 text-2xl p-5">
      Inspired from{' '}
      <a
        href="https://brittanychiang.com/"
        target="_blank"
        className="font-bold hover:text-teal-400"
      >
        Portfolio of Britanny Chiang
      </a>
      . Coded in{' '}
      <a
        className="font-bold hover:text-teal-400"
        target="_blank"
        href="https://code.visualstudio.com/"
      >
        Visual Studio Code
      </a>
      . Built with{' '}
      <a
        className="font-bold hover:text-teal-400"
        href="https://react.dev"
        target="_blank"
      >
        React.js
      </a>{' '}
      and{' '}
      <a
        className="font-bold hover:text-teal-400"
        href="https://tailwindcss.com"
        target="_blank"
      >
        Tailwind CSS
      </a>
      , deployed with{' '}
      <a
        className="font-bold hover:text-teal-400"
        href="https://vercel.com"
        target="_blank"
      >
        Vercel
      </a>
      . View the source code on{' '}
      <a
        className="font-bold hover:text-teal-400"
        href="https://github.com/kartikjoshi267/NewPortfolio"
        target="_blank"
      >
        GitHub
      </a>
    </footer>
  )
}

export default Footer
