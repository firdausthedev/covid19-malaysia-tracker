import React from 'react';
import styled from 'styled-components';

const TotalDeath = ({ data }) => {
  return (
    <TotalCasesStyle>
      <h2>Total Deaths</h2>
      <div>
        <p>
          <strong>{data.deaths ? data.deaths : 'loading..'}</strong>
        </p>
      </div>
    </TotalCasesStyle>
  );
};

const TotalCasesStyle = styled.div`
  margin-top: 1.2rem;
  height: 9rem;
  border: 1px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  h2 {
    background: #f73859;
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
    /* margin-bottom: 1.2rem; */
    h2 {
      font-size: 1rem;
    }
    div p {
      font-size: 1rem;
    }
  }
`;

export default TotalDeath;
