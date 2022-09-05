import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'
import NavBar from './components/NavBar'
import { useSelector } from 'react-redux'
import { RootState } from './types'
import FavoriteList from './components/FavoriteList'

const Routes = () => {
  const {
    ui: { drawerOpen },
  } = useSelector((state: RootState) => state)

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:name" component={Detail} />
      </Switch>
      {drawerOpen && <FavoriteList />}
    </>
  )
}

export default Routes
