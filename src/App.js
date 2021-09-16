import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Search from './components/Search'
import Charts from './components/Charts'

function App() {
  return (
    <div className="site-wrapper d-flex flex-column">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/charts">
            <Charts />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
