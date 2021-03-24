import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar';
import {Homepage} from './pages/Homepage/Homepage';
import {Aboutpage} from './pages/Aboutpage/Aboutpage';
import {Contactpage} from './pages/Contactpage/Contactpage';
import {Projectspage} from './pages/Projectspage/Projectspage';


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
                </Switch>
            </Router>
        </div>
    )
}
