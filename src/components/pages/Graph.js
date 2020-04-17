import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ZingChart from 'zingchart-react';
import CustomeBtn from './../CustomBtn';

const Graph = ({ dataGraph, historyDeaths, darkMode }) => {
  const [totalConfirmedHistory, setTotalConfirmedHistory] = useState([]);
  const [totalNewCasesHistory, setTotalNewCasesHistory] = useState([]);
  const [totalDeathsHistory, setTotalDeathsHistory] = useState([]);
  const [totalNewDeathsHistory, setTotalNewDeathsHistory] = useState([]);
  const [confirmedConfig, setConfirmedConfig] = useState({});
  const [diffConfirmedConfig, setDiffConfiremedConfig] = useState({});
  const [configDeaths, setConfigDeaths] = useState({});
  const [diffConfigDeaths, setDiffConfigDeaths] = useState({});

  useEffect(() => {
    getTotalHistoryCases(dataGraph, historyDeaths);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDiff = (singleHistory, prevHistoryArray, index) => {
    if (index === 0) {
      return 0;
    } else {
      if (singleHistory[1] - prevHistoryArray[1] === 0) {
        return 0;
      } else {
        return singleHistory[1] - prevHistoryArray[1];
      }
    }
  };

  const getTotalHistoryCases = (timeline, deathTimeLine) => {
    const confirmed = timeline.map((h) => h[1]);
    const confirmedDiff = timeline.map((h, index) => getDiff(h, timeline[index - 1], index));
    const deaths = deathTimeLine.map((h) => h[1]);
    const deathsDiff = deathTimeLine.map((h, index) => getDiff(h, deathTimeLine[index - 1], index));
    setTotalNewCasesHistory(confirmedDiff);
    setTotalConfirmedHistory(confirmed);
    setTotalDeathsHistory(deaths);
    setTotalNewDeathsHistory(deathsDiff);

    setConfirmedConfig({
      theme: darkMode ? 'dark' : 'light',
      type: 'line',
      series: [
        {
          values: confirmed,
        },
      ],
    });
    setDiffConfiremedConfig({
      theme: darkMode ? 'dark' : 'light',
      type: 'bar',
      series: [
        {
          values: confirmedDiff,
        },
      ],
    });
    setConfigDeaths({
      theme: darkMode ? 'dark' : 'light',
      type: 'bar',
      series: [
        {
          values: deaths,
        },
      ],
    });
    setDiffConfigDeaths({
      theme: darkMode ? 'dark' : 'light',
      type: 'bar',
      series: [
        {
          values: deathsDiff,
        },
      ],
    });
  };
  return (
    <GraphDiv id='graph'>
      <div id='title'>
        <div>
          <CustomeBtn to='/'>Back</CustomeBtn>
        </div>
        <h2>Total Confirmed Cases by Day</h2>
        <div></div>
      </div>
      {totalConfirmedHistory.length > 0 ? <ZingChart data={confirmedConfig} /> : ''}
      <h2 id='last-h2'>Total New Cases by Day</h2>
      {totalNewCasesHistory.length > 0 ? <ZingChart data={diffConfirmedConfig} /> : ''}
      <h2 id='last-h2'>Total Deaths by Day</h2>
      {totalDeathsHistory.length > 0 ? <ZingChart data={configDeaths} /> : ''}
      <h2 id='last-h2'>Total New Deaths by Day</h2>
      {totalNewDeathsHistory.length > 0 ? <ZingChart data={diffConfigDeaths} /> : ''}
    </GraphDiv>
  );
};

const GraphDiv = styled.div`
  margin-bottom: 1.5rem;
  #title {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0.8rem 0;

    div {
      display: inline-block;
      margin: auto 0;
    }
    h2 {
      text-align: center;
      display: inline-block;
    }
  }

  #last-h2 {
    text-align: center;
    padding: 0.8rem 0;
  }

  @media (max-width: 480px) {
    #title h2 {
      font-size: 1rem;
    }

    #title div a {
      font-size: 0.8rem;
      padding: 0.3rem 1.8rem;
      border-radius: 8px;
    }

    #last-h2 {
      font-size: 1rem;
    }
  }
`;

export default Graph;
