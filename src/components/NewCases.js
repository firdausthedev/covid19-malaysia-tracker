import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const NewCases = () => {
  const [newCase, setNewCase] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getTotalNewCases();
  }, []);

  const getTotalNewCases = async () => {
    const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/all');
    const history2 = res.data.confirmed.locations[153].history;
    setNewCase(Object.entries(history2));
    isLoading(false);
  };

  const getPreviousCase = (numOfArray) => {
    let todayCase = newCase[numOfArray - 1];
    let yesterdayCase = newCase[numOfArray - 2];
    let todayCaseConverted = todayCase != null ? Object.values(todayCase) : {};
    let yesterdayCaseConverted = yesterdayCase != null ? Object.values(yesterdayCase) : {};
    const total = parseInt(todayCaseConverted[1]) - parseInt(yesterdayCaseConverted[1]);
    return total;
  };
  return (
    <NewCaseStyle>
      <h2>New Cases</h2>

      <div>
        <p>
          <strong>
            {!isNaN(getPreviousCase(parseInt(newCase.length)))
              ? getPreviousCase(parseInt(newCase.length))
              : 'loading..'}
          </strong>
        </p>
      </div>
    </NewCaseStyle>
  );
};

const NewCaseStyle = styled.div`
  margin-top: 1.2rem;
  height: 10rem;
  border: 1px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  h2 {
    background: #384259;
    color: #fff;
    flex: 15%;
    align-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    flex: 85%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    p {
      font-size: 2rem;
      font-weight: 400;
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 1rem;
    }
    div p {
      font-size: 1rem;
    }
  }
`;

export default NewCases;
