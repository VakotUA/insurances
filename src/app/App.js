import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import { Home } from '../modules/home'
import { Cart } from '../modules/cart'
import './App.css'

function App () {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
