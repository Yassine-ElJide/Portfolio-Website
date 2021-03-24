import React from 'react'
import {Link} from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebook} from 'react-icons/fa';
import './_Homepage.scss';
export const Homepage = () => {
    return (
        <section className="homepage">
            <h1>I'm Yassine <span>EL Jide</span></h1>
            <p>I'm a Front End Web Developer and a Computer Science Student based in France, and I love Web Development...</p>
            <div className="social-media">
                <button>
                    <Link to="/" target="_blank"><FaFacebook/></Link>
                </button>
                <button>
                    <Link to="/" target="_blank"><FaInstagram/></Link>
                </button>
                <button>
                    <Link to={{ pathname: "https://github.com/Yassine-ElJide" }} target="_blank"><FaGithub/></Link>
                </button>
            </div>
            <button className="view">
                  <Link to="/projects">
                      View Some Of my Projects
                  </Link>
            </button>
        </section>
    )
}
