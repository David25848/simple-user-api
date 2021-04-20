import React, { Component, Fragment } from 'react'
// import './App.css'
import { Route, Switch } from 'react-router-dom'
import Users from './Users/Users'
import User from './User/User'
import NewUser from './NewUser/NewUser'
// import Navbar from './Navbar'

const App = () => { 
    return(
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/new" component={NewUser} />
      </Switch>
    )
}

export default App