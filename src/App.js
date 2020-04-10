import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Navbar from './components/layout/Nabvar';
import Graph from './components/pages/Graph';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/covid19-malaysia-tracker/graph' component={Graph} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
