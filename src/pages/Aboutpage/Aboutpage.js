import React from 'react'
import './Aboutpage.scss';

export const Aboutpage = () => {
    return (
        <section className="aboutpage">
            <div className="aboutpage__info">
                <h1>Web Developer</h1>
                <p>
                    Welcome to my Porfolio Website, I'm EL JIDE Yassine 19 years old currently at my second year
                    of Computer Science at The University Gustave Eiffel. I'm very passionate about IT especially
                    Web developement and CyberSecurity. Over this 2 years, I learned a couple of technologies as well
                    as DataStructures and Algorithms that helped me develop multiple projects. I'm currently looking for an apprenticeship in Network & Security
                    Here are some technologsies i work with:
                </p>
            </div>
            <div className="aboutpage__skills">
                <div className="skill">HTML5</div>
                <div className="skill">CSS3</div>
                <div className="skill">JAVASCRIPT</div>
                <div className="skill">REACT</div>
                <div className="skill">NODE&amp;Express</div>
                <div className="skill">MONGODB</div>
                <div className="skill">SASS</div>
                <div className="skill">C</div>
                <div className="skill">Python</div>
                <div className="skill">PostgreSQL</div>
                <div className="skill">PHP</div>
            </div>
        </section>
    )
}
