import React, { useEffect, useRef } from 'react'
import "./Home.css"
import image from "../../../image/image.jpeg"
import { FaDownload } from 'react-icons/fa';
import typed from "typed.js"
import About from '../about/About';
import Experience from '../Experience/Experience';
import Skill from '../Skills/skill';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import pdf from "../../../pdf/Priyank Bhalala.pdf"

const Home = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["I'M Frontend Developer", "and", "I'M Python Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      

    }
    const type = new typed(typeRef.current, options)

    return (() => {
      type.destroy()

    })
  }, [])

  return (
    <>

      <section className="home" >
        <div className="home-content" data-aos="fade-up-right"
          data-aos-delay="25"
          data-aos-duration="1000"
        >
          <h1>Welcome to My Portfolio</h1>
          <h2>HI, My Name is Priyank Bhalala.</h2>
          <span ref={typeRef}></span>
          <br />
          <a href="#About"><button className="cta-button">Learn More</button></a>
          <a href={pdf} download="Resume.pdf"><button className="cta-button">Resume<FaDownload style={{ textAlign: "center" }} /></button> </a>
        </div>
        <div className="home-image" data-aos="fade-up-left"
          data-aos-delay="25"
          data-aos-duration="1000"
        >
          <img src={image} alt="Profile" />
        </div>
      </section>
      <About />
      <Experience />
      <Skill />
      <Project />
      <Contact />
    </>
  )
}

export default Home