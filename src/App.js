import React from 'react';
import { HashRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Navbar from './components/layout/Nabvar';
import Graph from './components/pages/Graph';

function App() {
  return (
    <HashRouter basename='/'>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/graph' component={Graph} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
