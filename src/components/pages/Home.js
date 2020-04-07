import React, { Fragment } from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import styled from 'styled-components';
import NewCases from '../NewCases';
import TotalDeath from './../TotalDeath';
import HistoryCases from '../HistoryCases';
const Home = () => {
  return (
    <Fragment>
      <TodayDate />
      <Grid>
        <TotalCases />
        <div>
          <NewCases />
          <TotalDeath />
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

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0rem;
  }
`;

export default Home;
