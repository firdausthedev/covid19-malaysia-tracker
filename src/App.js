import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Graph from './components/pages/Graph';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page404 from './components/pages/404page';

function App() {
  const [data, setData] = useState({});
  const [flag, setFlag] = useState('');
  const [loading, isLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);
  const [timelineDeaths, setTimelineDeaths] = useState([]);
  const [showDeathsTimeline, setShowDeathsTimeline] = useState(false);
  let [counter, setCounter] = useState(0);
  const countryCodeName = ['MY', 'ID', 'SG', 'TH'];
  // eslint-disable-next-line no-unused-vars
  const [countryName, setCountryName] = useState(countryCodeName[counter]); // change country here

  const getDarkModeStore = () => {
    const isMode = JSON.parse(localStorage.getItem('dark'));
    return isMode || false;
  };
  const [darkMode, setDarkMode] = useState(getDarkModeStore());

  useEffect(() => {
    setCases(countryName);
    setDarkModeStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  const setDarkModeStore = () => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  };

  const countryChange = () => {
    isLoading(true);
    if (counter < 3) {
      setCounter((counter += 1));
      setCountryName(countryCodeName[counter]);
      setCases(countryCodeName[counter]);
    } else {
      setCounter(0);
      setCountryName(countryCodeName[0]);
      setCases(countryCodeName[0]);
    }
  };
  const setCases = async (name) => {
    try {
      const [resAPI1, resAPI2] = await Promise.all([
        axios.get('https://disease.sh/v3/covid-19/countries/' + name + '?yesterday=true&strict=true&allowNull=true'),
        axios.get(
          'https://disease.sh/v3/covid-19/historical/' +
          name +
          '?lastdays=all'
        ),
      ]);

      const flagSrc = resAPI1.data.countryInfo.flag;
      setData(resAPI1.data)
      setFlag(flagSrc);


      const timelineAPI = resAPI2.data.timeline.cases;
      const timelineDeathsAPI = resAPI2.data.timeline.deaths;
      setTimeline(Object.entries(timelineAPI));
      setTimelineDeaths(Object.entries(timelineDeathsAPI));
      isLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Server Error. Please come back later..');
    }
  };

  const setDeathTimeline = (isSelected) => {
    setShowDeathsTimeline(!isSelected);
  };

  const setDarkModeFunc = (isSelected) => {
    setDarkMode(!isSelected);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar />
        <div className='container'>
          <ToastContainer />
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
                  history={timeline}
                  historyDeaths={timelineDeaths}
                  showDeathsTimeline={showDeathsTimeline}
                  setDeathTimeline={setDeathTimeline}
                  darkModeFunc={setDarkModeFunc}
                  darkMode={darkMode}
                  countryChange={countryChange}
                />
              )}
            />
            <Route
              exact
              path='/graph'
              render={(props) => (
                <Graph
                  {...props}
                  dataGraph={timeline}
                  historyDeaths={timelineDeaths}
                  darkMode={darkMode}
                />
              )}
            />
            <Route exact path='*' render={(props) => <Page404 {...props} darkMode={darkMode} />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
