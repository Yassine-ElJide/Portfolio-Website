import React, { useState } from 'react';
import {Link} from 'react-router-dom';


export const  Navbar = () =>  {
    const [click, setClick] = useState(false);
    return(
            <nav className="navbar">
                <div className="navbar__menu" onClick={() => setClick(!click)}><i className="fas fa-bars"></i></div>
                <ul className={click ? 'navbar__links toggle': "navbar__links"}>
                    <li className="navbar__link">
                        <Link to='/' onClick={() => setClick(false)}>Home</Link>
                    </li>
                    <li className="navbar__link">
                        <Link to='/about' onClick={() => setClick(false)}>About</Link>
                    </li>
                    <li className="navbar__link">
                        <Link to='/skills'  onClick={() => setClick(false)}>Skills</Link>
                    </li>
                    <li className="navbar__link">
                        <Link to='/projects'  onClick={() => setClick(false)}>Projects</Link>
                    </li>
                    <li className="navbar__link">
                        <Link to='/contact'  onClick={() => setClick(false)}>Contact</Link>
                    </li>
                </ul>
            </nav>
    )
}

