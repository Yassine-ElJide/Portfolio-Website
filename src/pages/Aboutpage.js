import React from 'react'
import { FaGithub, FaInstagram, FaFacebook} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export const Aboutpage = () => {
    return (
        <section className="aboutpage">
            <div className="info">
                <h2>About Me</h2>
                <p>My name is Yassine EL JIDE, I'm 18 years old I live in France .
                    I started Web Development this year due to the passion that I founded on it. 
                    I love doing sports especially Calisthenics bodyweight training , currently I'm
                    in college studying Computer Science.
                </p>
            </div>
            <div className="info contact">
                <h2>Contact Details</h2>
                <p>
                    <h4>Yassine ELJIDE</h4>
                    <h4>yassine.eljide12@gmail.com</h4>
                    <h4>+33671764245</h4>
                </p>
            </div>
        </section>
    )
}
