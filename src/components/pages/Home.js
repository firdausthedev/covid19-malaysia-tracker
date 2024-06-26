import React from 'react';
import TodayDate from './../TodayDate';
import TotalCases from './../TotalCases';
import HistoryCases from '../HistoryCases';
import CustomBtn from './../CustomBtn';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

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
    <div id="total-cases">
      <TodayDate darkMode={darkMode} darkModeFunc={darkModeFunc} />
      <TotalCases
        data={data}
        flag={flag}
        loading={loading}
        countryChange={countryChange}
      />
      <BtnContainer id="btn-container">
        <CustomBtn
          onClick={() => setDeathTimeline(showDeathsTimeline)}
          black
          to="#">
          {!showDeathsTimeline ? 'Deaths' : 'Confirmed'}{' '}
          <FontAwesomeIcon icon={faSyncAlt} />
        </CustomBtn>
        <CustomBtn to="/graph">
          Graphs <FontAwesomeIcon icon={faArrowRight} />
        </CustomBtn>
      </BtnContainer>
      {!showDeathsTimeline && (
        <HistoryCases
          history={history}
          title="Timeline: Confirmed Cases"
          loading={loading}
        />
      )}
      {showDeathsTimeline && (
        <HistoryCases
          title="Timeline: Deaths"
          history={historyDeaths}
          loading={loading}
        />
      )}
    </div>
  );
};

const BtnContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

export default Home;
