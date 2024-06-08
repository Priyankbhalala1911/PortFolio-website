import React from 'react'
import "./Footer.css"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer" data-aos="fade-up"
        data-aos-duration="500">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Experience">Experience</Link>
              <Link to="/Skills">Skill</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-social"  data-aos="zoom-in" data-aos-duration="500">
              <a href="https://www.facebook.com/priyank.bhalala.5" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/priyank-bhalala-09183a243/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Priyankbhalala1911" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/web_page_01_._/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
            <p className="footer-copy">&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
        </footer>
      );
}   

export default Footer