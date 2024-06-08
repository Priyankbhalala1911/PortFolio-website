/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Project.css"
import project1 from "../../../image/project1.png"
import project2 from "../../../image/project2.png"
import project3 from "../../../image/last.png"

const Project = () => {
  const projects = [
    {
      image: project1,
      title: "CarPoint",
      description: "These Project developed using HTML,CSS and JavaScript. These Project is builded in my First Internship from LoopCode Technologies.Included carselling,car accessories and car blog in project.",
      link: "https://carpoint-selling.netlify.app/",
    },
    {
      image: project2,
      title: "Online Book Store",
      description: "These Project developed using React,Nodejs and mongoDB.The functionality such as book sell/buy both,search book,login authentication,add to cart and Stripe payment system included in project.",
      link: "https://github.com/Priyankbhalala1911/Book-store",
    },
    {
      image: project3,
      title: "Notes Pro",
      description: "These Project developed using Andriod and Firebase.The functionality such as Login authentication,notes add,update and delete from firebase and show all notes included in project.",
      link: "https://github.com/Priyankbhalala1911/Notes_pro",
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects" data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="25">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card" data-aos="zoom-in-down" data-aos-delay="25"
          data-aos-duration="1000">
            <img src={project.image} alt={`${project.title} image`} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project