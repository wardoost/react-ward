// @flow
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './Layout'
import Home from 'pages/Home'
import Error from 'pages/Error'
import './App.css'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error} />
      </Switch>
    </Layout>
  </Router>
)

export default App
