import React from 'react'
import './Aboutpage.scss';

export const Aboutpage = () => {
    return (
        <section className="aboutpage">
            <div className="aboutpage__info">
                <h1>Web Developer</h1>
                <p>
                    My name is Yassine EL JIDE, I'm 18 years old I live in France .
                    I started Web Development this year due to the passion that I founded on it. 
                    I love doing sports especially Calisthenics bodyweight training , currently I'm
                    in college studying Computer Science in the University Gustave Eiffel.
                    Over this year, I learned a couple of technologies that i can make stuff with like
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
            </div>
        </section>
    )
}
