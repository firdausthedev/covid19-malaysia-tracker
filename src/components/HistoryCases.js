import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const HistoryCases = ({ history }) => {
  const getDate = (dateData) => {
    const date = new Date(dateData);
    return date.toUTCString();
  };

  const getDiff = (singleHistory, prevHustoryArray, index) => {
    if (index === 0) {
      return '';
    } else {
      if (singleHistory[1] - prevHustoryArray[1] === 0) {
        return '';
      } else return `+${singleHistory[1] - prevHustoryArray[1]}`;
    }
  };

  return (
    <NewCaseStyle>
      <h2>History : Confirmed Cases</h2>
      <div id='graph-btn-container'>
        <Link to='/graph'>Graphs</Link>
      </div>
      <div>
        <Scrollbars style={{ height: 300 }} autoHide>
          {history
            .map((h, index) => (
              <li key={h[0]}>
                {getDate(h[0]).substr(5, 12)} : <strong>{h[1]}</strong>
                <span>{getDiff(h, history[index - 1], index)}</span>
              </li>
            ))
            .reverse()}
        </Scrollbars>
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

  h2 {
    background: #1e2022;
    color: #fff;
    flex: 15%;
    align-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
  #graph-btn-container {
    padding-top: 5px;

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

  div {
    padding-bottom: 10px;
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
  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
    h2 {
      font-size: 1rem;
    }
    div li {
      font-size: 1rem;
    }
    #graph-btn-container a {
      font-size: 0.8rem;
      padding: 0.3rem 1.8rem;
      border-radius: 8px;
    }
  }
`;

export default HistoryCases;
