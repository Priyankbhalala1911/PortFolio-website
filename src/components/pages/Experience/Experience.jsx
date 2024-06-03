import React from 'react'
import "./Experience.css"

const Experience = () => {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "LoopCode Technologies",
            duration: "May 2024 - Present",
            description: "Developed and maintained web applications using React and Redux-toolkit.",
        },
        {
            title: "Frontend Developer",
            company: "LoopCode Technologies",
            duration: "Nov 2022 - May 2023",
            description: "Implemented web designs using HTML,CSS and JavaScript and improved user experience.",
        },
        {
            title: "Student Start-up Innovation Policy and Gujarat Knowledge Society(SSIP)-Hackthon",
            company: "Surat,Gujarat",
            duration: "Oct 2022 and Nov 2023",
            description: "Developed a function of creating a web Portal Integrating both Private and Government Sector Job Opportunities in 2022, and Developed government application tasked with monitoring and managing complaints using Flutter and Firebase Platform in 2023.",
        },
        // Add more experiences as needed
    ];

    return (
        <section className="experience" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <h2>Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="25">
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );

}

export default Experience