import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="site-wrapper d-flex flex-column">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
