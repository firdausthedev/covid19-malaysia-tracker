import React, { Fragment } from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import styled from 'styled-components';
import NewCases from '../NewCases';
import TotalDeath from './../TotalDeath';
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
    </Fragment>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export default Home;
