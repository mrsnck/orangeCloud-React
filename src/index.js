import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import LegalTerms from './views/legal-terms'
import Home from './views/home'
import Page from './views/page'
import PrivacyPolicy from './views/privacy-policy'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LegalTerms} exact path="/legal-terms" />
        <Route component={Home} exact path="/" />
        <Route component={Page} path="**" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
