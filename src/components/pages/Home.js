import React, { Fragment, useEffect, useState } from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import styled from 'styled-components';
import HistoryCases from '../HistoryCases';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [data, setData] = useState({});
  const [flag, setFlag] = useState('');
  const [fatalityRate, setFatalityRate] = useState(0);
  const [recoveryRate, setRecoveryRate] = useState(0);
  const [loading, isLoading] = useState(true);
  const [newCase, setNewCase] = useState([]); //new case from history
  const [history, newHistory] = useState([]); //confirmed history

  useEffect(() => {
    setCases();
  }, []);

  const setCases = async () => {
    try {
      const res = await axios.get('https://corona.lmao.ninja/countries/458');
      const flagSrc = res.data.countryInfo.flag;
      const fatalityRateData = ((res.data.deaths / res.data.cases) * 100).toFixed(2);
      const recoveryRateData = ((res.data.recovered / res.data.cases) * 100).toFixed(2);
      setRecoveryRate(recoveryRateData);
      setFatalityRate(fatalityRateData);
      setFlag(flagSrc);
      setData(res.data);

      const resApi2 = await axios.get(
        'https://coronavirus-tracker-api.herokuapp.com/v2/locations/153'
      );
      const timeline = resApi2.data.location.timelines.confirmed.timeline;
      newHistory(Object.entries(timeline));
      const newCaseHistory = resApi2.data.location.timelines.confirmed.timeline;
      isLoading(false);
      setNewCase(Object.entries(newCaseHistory));
    } catch (error) {
      console.log(error);
      toast.error('Server Error. Please come back later..');
    }
  };

  return (
    <Fragment>
      <TodayDate />
      <ToastContainer autoClose={false} />
      <Grid>
        <TotalCases
          data={data}
          flag={flag}
          fatalityRate={fatalityRate}
          recoveryRate={recoveryRate}
          newCase={newCase}
          loading={loading}
        />
      </Grid>
      <HistoryCases history={history} />
    </Fragment>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (max-width: 588px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0rem;
  }
`;

export default Home;
