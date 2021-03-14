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
import Contact from './components/Contact'

import ModalCom from './components/Modal'

import {
  setTranslations,
  setLanguageCookie,
  translate,
} from 'react-switch-lang';

import en from './lang/en.json'
import km from './lang/km.json'

setTranslations({ en, km });
setLanguageCookie('lang');

class App extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <Router>
        <div className="app" style={{ background: colors.black, position: 'relative', overflow: 'hidden' }}>
          <MainHeader t={t} />
          <Switch>
            <Route path="/" exact component={() => <Home t={t} />} />
            <Route path="/category" component={Category} />
            <Route path=":slug" component={Gamedtail} />
          </Switch>
          <Footer t={t} />
          <Contact />
        </div>
      </Router>
    )
  }
}

export default translate(App);