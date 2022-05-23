import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Graph from './components/pages/Graph';
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

  const getApiData = async (url, name, url2) => {
    try {
      const response = await fetch(url + name + url2, { method: 'GET' });
      return response.json();
    } catch (error) {
      console.log(error);
      toast.error('Server Error. Please come back later..');
    }
  };

  const setCases = name => {
    getApiData(
      'https://disease.sh/v3/covid-19/countries/',
      name,
      '?yesterday=true&strict=true&allowNull=true',
    ).then(data => {
      const flagSrc = data.countryInfo.flag;
      setData(data);
      setFlag(flagSrc);
      console.log(data);
    });

    getApiData(
      'https://disease.sh/v3/covid-19/historical/',
      name,
      '?lastdays=all',
    ).then(data => {
      console.log(data);
      const timelineAPI = data.timeline.cases;
      const timelineDeathsAPI = data.timeline.deaths;
      setTimeline(Object.entries(timelineAPI));
      setTimelineDeaths(Object.entries(timelineDeathsAPI));
      isLoading(false);
    });
  };

  const setDeathTimeline = isSelected => {
    setShowDeathsTimeline(!isSelected);
  };

  const setDarkModeFunc = isSelected => {
    setDarkMode(!isSelected);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar />
        <div className="container">
          <ToastContainer />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
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
              }
            />
            <Route
              exact
              path="/graph"
              element={
                <Graph
                  dataGraph={timeline}
                  historyDeaths={timelineDeaths}
                  darkMode={darkMode}
                />
              }
            />
            <Route exact path="*" element={<Page404 darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
