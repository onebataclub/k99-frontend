import React from 'react'
import MainHeader from './components/Header'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { colors } from './theam'
// Router
import Home from './router/Home'
import Category from './router/Category'

import Gamedtail from './router/GameDtail'
// UI components

import Footer from './Footer';


export default function App() {
  return (
    <Router>
      <div className="app" style={{ background: colors.black }}>
        <MainHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Home} />
          <Route path="/signup" exact component={Home} />
          <Route path="/category" component={Category} />
          <Route path=":slug" component={Gamedtail} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}