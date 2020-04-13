import React, { Fragment, useState } from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import HistoryCases from '../HistoryCases';
import HistoryDeaths from '../HistoryDeaths';
import CustomBtn from './../CustomBtn';
import styled from 'styled-components';
const Home = (props) => {
  const [showDeathsTimeline, setShowDeathsTimeline] = useState(false);
  return (
    <Fragment>
      <TodayDate />
      <div>
        <TotalCases
          data={props.data}
          flag={props.flag}
          history={props.history}
          loading={props.loading}
        />
      </div>
      <BtnContainer>
        <CustomBtn onClick={() => setShowDeathsTimeline(!showDeathsTimeline)}>
          {!showDeathsTimeline ? 'Deaths' : 'Confirmed'} <i class='fas fa-sync-alt' />
        </CustomBtn>
        <CustomBtn to='/graph'>
          Graphs <i class='fas fa-arrow-right' />
        </CustomBtn>
      </BtnContainer>
      {!showDeathsTimeline && <HistoryCases history={props.history} loading={props.loading} />}
      {showDeathsTimeline && (
        <HistoryDeaths history={props.historyDeaths} loading={props.loading} />
      )}
    </Fragment>
  );
};

const BtnContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  a:first-child {
    background: black;
    color: white;
    margin-right: 3px;
  }
`;

export default Home;
