import React from 'react'
import "./skill.css"
import icon1 from "../../../image/icon1.svg"
import icon2 from "../../../image/reactjs.svg"
import icon3 from "../../../image/nodejs.svg"
import icon4 from "../../../image/html-5.svg"
import icon5 from "../../../image/css-3.svg"
import icon6 from "../../../image/flutter.svg"
import icon7 from "../../../image/redux.svg"
import icon8 from "../../../image/python.svg"
import icon9 from "../../../image/android-color.svg"


const skillsData = [
    { id: 1, name: 'JavaScript', icon: icon1},
    { id: 2, name: 'React', icon: icon2},
    { id: 3, name: 'Node.js', icon: icon3},
    { id: 4, name: 'HTML', icon: icon4 },
    { id: 5, name: 'CSS', icon: icon5},
    { id: 6, name: 'Flutter', icon: icon6},
    { id: 7, name: 'Redux-ToolKit', icon: icon7},
    { id: 8, name: 'Python', icon: icon8 },
    { id: 9, name: 'Android', icon: icon9 },
    // Add more skills as needed
  ];
  
  const Skill = () => {
    return (
      <section className="skills" id="skills" data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="25">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-container">
          {skillsData.map(skill => (
            <div key={skill.id} className="skill-card" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
              <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );  
}

export default Skill