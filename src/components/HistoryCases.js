import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
const HistoryCases = () => {
  const [history, newHistory] = useState([]);

  useEffect(() => {
    getTotalHistoryCases();
  }, []);

  const getTotalHistoryCases = async () => {
    const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/153');
    const history2 = res.data.location.timelines.confirmed.timeline;
    // console.log(history2);

    newHistory(Object.entries(history2));
  };

  const getDate = (dateData) => {
    const date = new Date(dateData);
    return date.toUTCString();
  };

  const getDiff = (singleHistory, nextHistoryArr, index) => {
    if (index === 0) {
      return '';
    } else {
      if (singleHistory[1] - nextHistoryArr[1] === 0) {
        return '';
      } else return `+${singleHistory[1] - nextHistoryArr[1]}`;
    }

    //return b;
  };

  return (
    <NewCaseStyle>
      <h2>History : Confirmed Cases</h2>
      <div>
        <PerfectScrollbar>
          {history
            .map((h, index) => (
              <li key={h[0]}>
                {getDate(h[0]).substr(5, 12)} : <strong>{h[1]}</strong>
                <span>{getDiff(h, history[index - 1], index)}</span>
              </li>
            ))
            .reverse()}
        </PerfectScrollbar>
      </div>
    </NewCaseStyle>
  );
};

const NewCaseStyle = styled.div`
  margin-top: 1.2rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);
  overflow: hidden;
  display: flex;

  flex-direction: column;
  margin-bottom: 1.2rem;

  div {
    padding: 10px;
    background: white;
    max-height: 20rem;
    /* background: red; */
    text-align: center;
    li {
      font-size: 1.2rem;
      list-style-type: none;

      span {
        color: #f73859;
        margin-left: 10px;
      }
    }
  }

  h2 {
    background: #1e2022;
    color: #fff;
    flex: 15%;
    align-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
    h2 {
      font-size: 1rem;
    }
    div li {
      font-size: 1rem;
    }
  }
`;

export default HistoryCases;
