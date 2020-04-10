import React, { Fragment, useEffect, useState } from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import styled from 'styled-components';
import HistoryCases from '../HistoryCases';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState({});
  const [flag, setFlag] = useState('');

  useEffect(() => {
    getTotalCases();
  }, []);

  const getTotalCases = async () => {
    const res = await axios.get('https://corona.lmao.ninja/countries/458');
    const flagSrc = res.data.countryInfo.flag;
    setFlag(flagSrc);
    setData(res.data);
  };

  return (
    <Fragment>
      <TodayDate />
      <Grid>
        <TotalCases data={data} flag={flag} />
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
