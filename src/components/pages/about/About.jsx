import React from 'react'
import "./about.css"
import image from "../../../image/image2.jpeg"

const About = () => {
    return (
        <section className="about" id='About' data-aos="zoom-in">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-image"  data-aos="fade-down-right"
                        data-aos-duration="1000">
                    <img src={image} alt="Profile" />
                </div>
                <div className="about-text"  data-aos="fade-down-left"
                        data-aos-duration="1000">
                    <p>
                        Hi, I'm Priyank Bhalala. I am a passionate software developer with experience in
                        various web technologies including React, Python, and more. I love creating
                        interactive and dynamic user experiences. In my free time, I enjoy contributing
                        to open source projects and learning new technologies.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About