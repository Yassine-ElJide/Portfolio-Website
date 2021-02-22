import React from 'react'
import {Progress} from '../components/Progress';
import {Skills} from '../components/Skills';

export const Skillspage = () => {
    return (
        <section className="skillspage">
            <div className="skills">
                {Skills.map(skill => {
                    const {name, done} = skill;
                    return (
                        <Progress done={done} name={name}/>
                    )
                })}
            </div>
        </section>
    )
}
