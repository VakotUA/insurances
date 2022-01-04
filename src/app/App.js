import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

import { ModuleList } from '../modules/moduleList';
import { Cart } from '../modules/cart';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/modules/modulelist" component={ModuleList}/>
            <Route path="/modules/cart" component={Cart}/>
            <Redirect to="/modules/modulelist"/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
