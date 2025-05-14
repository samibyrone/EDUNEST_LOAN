import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './component/Navbar'
import Home from './component/nav/Home.jsx'


function App() {

  return (
    <>
      <div>
        <Navbar />
        <main>
          <div id = "home" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <Home/>
          </div>
          
          <div id = "home" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <Home/>
          </div>
          
          <div id = "home" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <Home/>
          </div>
          
          <div id = "home" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <Home/>
          </div>
          
          <div id = "home" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <Home/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
