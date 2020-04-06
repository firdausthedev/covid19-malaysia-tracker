import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Navbar from './components/layout/Nabvar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Home />>
        </div>
      </div>
    </Router>
  );
}

export default App;
