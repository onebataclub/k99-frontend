import React from 'react'
import MainHeader from './components/Header'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

// Router
import Home from './router/Home'
import Category from './router/Category'
import Movies from './router/Movies'

// UI components

import Footer from './Footer';
export default function App() {
  return (
    <Router>
      <div className="app">
        <MainHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/movies/:id" component={Movies} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}