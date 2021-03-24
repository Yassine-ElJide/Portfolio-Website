import React from 'react';
import {Link} from 'react-router-dom';
import {BiMenuAltRight} from 'react-icons/bi';
import {useState} from 'react';
import './_Navbar.scss';
export const  Navbar = () =>  {
    const [menu, setMenu] = useState(false);
    return(
            <nav className="navbar">
                <ul className={menu ? "navbar__links show-menu": "navbar__links"}>
                    <li className="navbar__link">
                        <Link to='/' onClick={() => setMenu(!menu)}>Home</Link>
                    </li>
                    <li className="navbar__link">
                        <Link to='/about' onClick={() => setMenu(!menu)}>About</Link>
                    </li>
                    <li className="navbar__link">
                        <Link to='/projects' onClick={() => setMenu(!menu)}>Projects</Link>
                    </li>
                    <li className="navbar__link">
                        <Link to='/contact' onClick={() => setMenu(!menu)}>Contact</Link>
                    </li>
                </ul>
                <button onClick={() => setMenu(!menu)}><BiMenuAltRight/></button>
            </nav>
    )
}

