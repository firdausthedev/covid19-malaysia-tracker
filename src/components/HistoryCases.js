import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
const HistoryCases = ({ history, loading, title }) => {
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
    <HistoryStyle id='timeline'>
      <h2>{title}</h2>

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
  box-shadow: var(--box);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;

  h2 {
    background: var(--darkish-color);
    color: var(--white-color);
    flex: 15%;
    align-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }

  div {
    padding: 10px 0;
    background: var(--white-color);
    max-height: 20rem;
    text-align: center;
    li {
      font-size: 1.2rem;
      list-style-type: none;

      span {
        color: var(--danger-color);
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

export default HistoryCases;
