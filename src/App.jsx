import { useState } from 'react'
import './App.css'
import { Navbar } from './component/Navbar'
import Home from './component/nav/Home.jsx'
import Services from './component/nav/Service.jsx'
import { Blog } from './component/nav/Blog.jsx'
import About from './component/nav/About.jsx'
import { Footer } from './component/nav/Footer.jsx'


function App() {

  return (
    <>
      <div>
        <Navbar />
        <main>
          <div id = "home" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <Home/>
          </div>
          
          <div id = "services" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <Services/>
          </div>
          
          <div id = "blog" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <Blog/>
          </div>
          
          <div id = "about" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <About/>
          </div>
          
          <div id = "contact" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <Footer/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
