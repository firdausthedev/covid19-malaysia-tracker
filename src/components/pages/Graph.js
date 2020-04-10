import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ZingChart from 'zingchart-react';
const Graph = () => {
  const [totalConfirmedHistory, setTotalConfirmedHistory] = useState([]);
  const [totalNewCasesHistory, setTotalNewCasesHistory] = useState([]);
  const [config, setConfig] = useState({});
  const [diffConfig, setDiffConfig] = useState({});

  useEffect(() => {
    getTotalHistoryCases();
  });

  const getDiff = (singleHistory, prevHistroyArray, index) => {
    if (index === 0) {
      return 0;
    } else {
      if (singleHistory[1] - prevHistroyArray[1] === 0) {
        return 0;
      } else {
        // console.log(prevHistroyArray[1]);
        return singleHistory[1] - prevHistroyArray[1];
      }
    }

    //return b;
  };

  const getTotalHistoryCases = async () => {
    const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/153');
    const history2 = Object.entries(res.data.location.timelines.confirmed.timeline);
    const array = history2.map((h) => h[1]);
    const arrayDiff = history2.map((h, index) => getDiff(h, history2[index - 1], index));
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
