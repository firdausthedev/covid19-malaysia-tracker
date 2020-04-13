import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
const HistoryDeaths = ({ history, loading }) => {
  const getDate = (dateData) => {
    const date = new Date(dateData);
    return date.toUTCString();
  };

  const getDiff = (singleHistory, prevHistoryArray, index) => {
    if (index === 0) {
      return '';
    } else {
      if (singleHistory[1] - prevHistoryArray[1] === 0) {
        return '';
      } else return `+${singleHistory[1] - prevHistoryArray[1]}`;
    }
  };

  return (
    <HistoryStyle>
      <h2>Timeline : Deaths</h2>

      <div>
        {!loading && (
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
        )}
      </div>
    </HistoryStyle>
  );
};

const HistoryStyle = styled.div`
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

  div {
    padding: 10px 0;
    background: white;
    max-height: 20rem;
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
  }
`;

export default HistoryDeaths;
