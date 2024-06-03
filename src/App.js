import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Experience from './components/pages/Experience/Experience'
import Skill from './components/pages/Skills/skill'
import Footer from './components/Footer/Footer'
import Project from './components/pages/Project/Project'
import Contact from './components/pages/Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nopage from './components/pages/Nopage/Nopage'


const App = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Skills' element={<Skill />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Nopage/>} />
          

        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App