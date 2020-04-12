import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ZingChart from 'zingchart-react';
import CustomeBtn from './../CustomBtn';

const Graph = ({ dataGraph, historyDeaths }) => {
  const [totalConfirmedHistory, setTotalConfirmedHistory] = useState([]);
  const [totalNewCasesHistory, setTotalNewCasesHistory] = useState([]);
  const [totalDeathsHistory, setTotalDeathsHistory] = useState([]);
  const [confirmedConfig, setConfirmedConfig] = useState({});
  const [diffConfirmedConfig, setDiffConfiremedConfig] = useState({});
  const [configDeaths, setConfigDeaths] = useState({});

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
    const array = timeline.map((h) => h[1]);
    const arrayDiff = timeline.map((h, index) => getDiff(h, timeline[index - 1], index));
    const arrayDeaths = deathTimeLine.map((h) => h[1]);
    setTotalNewCasesHistory(arrayDiff);
    setTotalConfirmedHistory(array);
    setTotalDeathsHistory(arrayDeaths);
    setConfirmedConfig({
      type: 'line',
      series: [
        {
          values: array,
        },
      ],
    });
    setDiffConfiremedConfig({
      type: 'bar',
      series: [
        {
          values: arrayDiff,
        },
      ],
    });
    setConfigDeaths({
      type: 'bar',
      series: [
        {
          values: arrayDeaths,
        },
      ],
    });
  };
  return (
    <GraphDiv>
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
