import React, { Fragment, useEffect, useState } from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import styled from 'styled-components';
import HistoryCases from '../HistoryCases';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState({});
  const [flag, setFlag] = useState('');
  const [fatalityRate, setFatalityRate] = useState(0);
  const [recoveryRate, setRecoveryRate] = useState(0);

  useEffect(() => {
    getTotalCases();
  }, []);

  const getTotalCases = async () => {
    const res = await axios.get('https://corona.lmao.ninja/countries/458');
    const flagSrc = res.data.countryInfo.flag;
    const fatalityRateData = ((res.data.deaths / res.data.cases) * 100).toFixed(2);
    const recoveryRateData = ((res.data.recovered / res.data.cases) * 100).toFixed(2);
    // console.log(fatalityRateData);
    setRecoveryRate(recoveryRateData);
    setFatalityRate(fatalityRateData);
    setFlag(flagSrc);
    setData(res.data);
  };

  return (
    <Fragment>
      <TodayDate />
      <Grid>
        <TotalCases
          data={data}
          flag={flag}
          fatalityRate={fatalityRate}
          recoveryRate={recoveryRate}
        />
      </Grid>
      <HistoryCases />
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
