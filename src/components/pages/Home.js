import React, { Fragment, useEffect, useState } from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import styled from 'styled-components';
import NewCases from '../NewCases';
import TotalDeath from './../TotalDeath';
import HistoryCases from '../HistoryCases';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getTotalCases();
  }, []);

  const getTotalCases = async () => {
    const res = await axios.get('https://corona.lmao.ninja/countries/458');
    setData(res.data);
  };

  return (
    <Fragment>
      <TodayDate />
      <Grid>
        <TotalCases data={data} />
        <div>
          <NewCases data={data} />
          <TotalDeath data={data} />
        </div>
      </Grid>
      <HistoryCases />
    </Fragment>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (max-width: 588px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0rem;
  }
`;

export default Home;
