import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
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
          <Route exact path='/' component={Home} />
          <Route exact path='/graph' component={Graph} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
