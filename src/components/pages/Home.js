import React, { Fragment } from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import HistoryCases from '../HistoryCases';

const Home = (props) => {
  return (
    <Fragment>
      <TodayDate />
      <div>
        <TotalCases
          data={props.data}
          flag={props.flag}
          newCase={props.newCase}
          loading={props.loading}
        />
      </div>
      <HistoryCases history={props.history} />
    </Fragment>
  );
};

export default Home;
