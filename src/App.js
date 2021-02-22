import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Homepage} from './pages/Homepage';
import {Aboutpage} from './pages/Aboutpage';
import {Contactpage} from './pages/Contactpage';
import {Projectspage} from './pages/Projectspage';
import {Skillspage} from './pages/Skillspage';


export const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Homepage}/>
                    <Route path='/about' exact component={Aboutpage}/>
                    <Route path='/projects' exact  component={Projectspage}/>
                    <Route path='/contact' exact  component={Contactpage}/>
                    <Route path='/skills' exact component={Skillspage}/>
                </Switch>
            </Router>
        </div>
    )
}
