import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ZingChart from 'zingchart-react';

const Graph = ({ dataGraph }) => {
  const [totalConfirmedHistory, setTotalConfirmedHistory] = useState([]);
  const [totalNewCasesHistory, setTotalNewCasesHistory] = useState([]);
  const [config, setConfig] = useState({});
  const [diffConfig, setDiffConfig] = useState({});

  useEffect(() => {
    getTotalHistoryCases(dataGraph);
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

  const getTotalHistoryCases = (timeline) => {
    const array = timeline.map((h) => h[1]);
    const arrayDiff = timeline.map((h, index) => getDiff(h, timeline[index - 1], index));
    setTotalNewCasesHistory(arrayDiff);
    setTotalConfirmedHistory(array);
    setConfig({
      type: 'line',
      series: [
        {
          values: array,
        },
      ],
    });
    setDiffConfig({
      type: 'bar',
      series: [
        {
          values: arrayDiff,
        },
      ],
    });
  };
  return (
    <GraphDiv>
      <div id='title'>
        <div>
          <Link to='/'>Back</Link>
        </div>
        <h2>Total Confirmed Cases by Day</h2>
        <div></div>
      </div>
      {totalConfirmedHistory.length > 0 ? <ZingChart data={config} /> : ''}
      <h2 id='last-h2'>Total New Cases by Day</h2>
      {totalNewCasesHistory.length > 0 ? <ZingChart data={diffConfig} /> : ''}
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
      a {
        text-align: center;
        display: inline-block;
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 10px;
        padding: 0.4rem 2rem;
        background: #f4e04d;
        box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);
      }
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
