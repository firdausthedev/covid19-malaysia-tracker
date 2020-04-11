import React, { useEffect, useState } from 'react';
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
  const [timeline, setTimeline] = useState([]); //new case from history
  const [history, newHistory] = useState([]); //confirmed history

  useEffect(() => {
    setCases();
  }, []);

  const setCases = async () => {
    try {
      const res = await axios.get('https://corona.lmao.ninja/countries/458');
      const flagSrc = res.data.countryInfo.flag;
      setFlag(flagSrc);
      setData(res.data);

      const resApi2 = await axios.get(
        'https://coronavirus-tracker-api.herokuapp.com/v2/locations/153'
      );
      const timelineAPI = resApi2.data.location.timelines.confirmed.timeline;
      newHistory(Object.entries(timelineAPI));
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
                <Home
                  {...props}
                  data={data}
                  flag={flag}
                  loading={loading}
                  newCase={timeline}
                  history={history}
                />
              )}
            />
            <Route
              exact
              path='/graph'
              render={(props) => <Graph {...props} dataGraph={timeline} />}
            />
            <Route
              render={(props) => (
                <Home
                  {...props}
                  data={data}
                  flag={flag}
                  loading={loading}
                  newCase={timeline}
                  history={history}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
