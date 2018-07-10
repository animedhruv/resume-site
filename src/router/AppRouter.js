import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

import MainApp from '../components/MainApp'
import ProjectsApp from '../components/ProjectsApp'
import NotFound from '../components/NotFoundApp'

const AppRouter = () => (
    <BrowserRouter>
        
            <Switch>
                <Route path="/" component={MainApp} exact={true}/>
                <Route path="/projects" component={ProjectsApp} />
                <Route path="*" component={NotFound} />
            </Switch>
       
    </BrowserRouter>
)

export default AppRouter