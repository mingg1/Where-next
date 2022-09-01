import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'
import NavBar from './components/NavBar'

const Routes = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:name" component={Detail} />
    </Switch>
  </>
)

export default Routes
