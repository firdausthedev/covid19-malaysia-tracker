import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { HashRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Navbar from './components/layout/Nabvar';
import Graph from './components/pages/Graph';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState({});
  const [flag, setFlag] = useState('');
  const [loading, isLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [countryName, setCountryName] = useState('MY');

  useEffect(() => {
    setCases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCases = async () => {
    try {
      const [resAPI1, resAPI2] = await Promise.all([
        axios.get('https://corona.lmao.ninja/countries/' + countryName),
        axios.get(
          'https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=' +
            countryName +
            '&timelines=true'
        ),
      ]);

      const flagSrc = resAPI1.data.countryInfo.flag;
      setFlag(flagSrc);
      setData(resAPI1.data);
      const timelineAPI = resAPI2.data.locations[0].timelines.confirmed.timeline;
      setTimeline(Object.entries(timelineAPI));

      isLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Server Error. Please come back later..');
    }
  };
  return (
    <HashRouter basename='/'>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <ToastContainer autoClose={false} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Home {...props} data={data} flag={flag} loading={loading} history={timeline} />
              )}
            />
            <Route
              exact
              path='/graph'
              render={(props) => <Graph {...props} dataGraph={timeline} />}
            />
            <Route
              render={(props) => (
                <Home {...props} data={data} flag={flag} loading={loading} history={timeline} />
              )}
            />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
