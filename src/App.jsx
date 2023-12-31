import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { useEffect } from 'react'
import withSplashScreen from './components/hocs/SplashScreen'

function App() {
  function handleMouseMove(event) {
    const spotlightEl = document.querySelector('#spotlight')
    const { clientX, clientY } = event;

    setTimeout(() => {
      spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #011957 20px, #000d2b 400px)`
    }, 100);

  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return (
    <>
      <div className='hidden lg:block' id="spotlight"></div>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default withSplashScreen(App)
