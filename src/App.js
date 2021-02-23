import React from 'react'
import MainHeader from './components/Header'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { colors } from './theam'
// Router
import Home from './router/Home'
import Login from './router/Login'
import Signup from './router/Signup'
import Category from './router/Category'

import Gamedtail from './router/GameDtail'
// UI components

import Footer from './Footer';
import Contact from './components/Contact'

export default function App() {
  return (
    <Router>
      <div className="app" style={{ background: colors.black, position:'relative', overflow:'hidden' }}>
        <MainHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/category" component={Category} />
          <Route path=":slug" component={Gamedtail} />
        </Switch>
        <Footer /> 
        <Contact/>
      </div>
    </Router>
  )
}