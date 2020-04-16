import React from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import HistoryCases from '../HistoryCases';
import CustomBtn from './../CustomBtn';
import styled from 'styled-components';

const Home = ({
  data,
  flag,
  history,
  loading,
  historyDeaths,
  showDeathsTimeline,
  setDeathTimeline,
  darkMode,
  darkModeFunc,
  countryChange,
}) => {
  return (
    <div id='total-cases'>
      <TodayDate darkMode={darkMode} darkModeFunc={darkModeFunc} />
      <TotalCases
        data={data}
        flag={flag}
        history={history}
        loading={loading}
        countryChange={countryChange}
      />
      <BtnContainer id='btn-container'>
        <CustomBtn onClick={() => setDeathTimeline(showDeathsTimeline)}>
          {!showDeathsTimeline ? 'Deaths' : 'Confirmed'} <i className='fas fa-sync-alt' />
        </CustomBtn>
        <CustomBtn to='/graph'>
          Graphs <i className='fas fa-arrow-right' />
        </CustomBtn>
      </BtnContainer>
      {!showDeathsTimeline && (
        <HistoryCases history={history} title='Timeline: Confirmed Cases' loading={loading} />
      )}
      {showDeathsTimeline && (
        <HistoryCases title='Timeline: Deaths' history={historyDeaths} loading={loading} />
      )}
    </div>
  );
};

const BtnContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  a:first-child {
    background: var(--primary-color);
    color: var(--white-color);
    margin-right: 3px;
  }
`;

export default Home;
