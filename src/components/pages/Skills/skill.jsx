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
  { id: 1, name: 'JavaScript', icon: icon1, description: "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web." },
  { id: 2, name: 'React.js', icon: icon2, description: "React.Js is an open-source front-end library and its code is split into components to facilitate code reusability and fast debugging." },
  { id: 3, name: 'Node.js', icon: icon3, description: "It is an open-sourced server JavaScript framework. It is usually used for server-side scripting and to generate the dynamic page content." },
  { id: 4, name: 'HTML5', icon: icon4, description: "HTML5 allows you to create a fast, robust and adaptable website. It is a responsive front-end framework." },
  { id: 5, name: 'CSS3', icon: icon5, description: "CSS3 frameworks are ready-made packages that are composed of files and folders containing standard code." },
  { id: 6, name: 'Flutter', icon: icon6, description: "Flutter is an open-source UI software development kit (SDK) created by Google. It allows developers to build natively compiled applications for mobile, web, and desktop from a single codebase. " },
  { id: 7, name: 'Redux-ToolKit', icon: icon7, description: "Redux Toolkit is our official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the standard way to write Redux logic, and we strongly recommend that you use it." },
  { id: 8, name: 'Python', icon: icon8, description: "Python is an interactive, object-oriented, fast, and high-level programming language. It is widely used for general-purpose programming." },
  { id: 9, name: 'Android', icon: icon9, description: "Android is a mobile operating system developed by Google (GOOGL) primarily for touchscreen devices, cell phones, and tablets. It is an open-source operating system, allowing companies to customize and modify the software to suit their needs." },
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
            <p className='skill-description'>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill