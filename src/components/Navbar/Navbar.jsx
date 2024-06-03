import React, {useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import "./navbar.css"

import { Link } from 'react-router-dom';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

   

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} >
            <div className="navbar-container">
                <Link to="/" className='navbar-logo'>Port<span>Folio</span></Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={handleClick}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./About" className="nav-links" onClick={handleClick}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./Experience" className="nav-links" onClick={handleClick}>Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./Skills" className="nav-links" onClick={handleClick}>Skill</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./Project" className="nav-links" onClick={handleClick}>Project</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./Contact" className="nav-links" onClick={handleClick}>Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar