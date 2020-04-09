import React from 'react';
import styled from 'styled-components';

const TotalCases = ({ data }) => {
  return (
    <TotalCasesStyle>
      <h2>Total Cases in {data.country}</h2>
      <div>
        <p>
          Confirmed cases : <strong>{data.cases ? data.cases : 'loading...'}</strong>
        </p>
        <p className='sub-heading'>
          Active cases: <strong>{data.active}</strong>
        </p>{' '}
        <p className='sub-heading'>
          Critical cases: <strong>{data.critical}</strong>
        </p>
        <p className='sub-heading'>
          Recovered: <strong className='green'>{data.recovered}</strong>
        </p>
      </div>
    </TotalCasesStyle>
  );
};

const TotalCasesStyle = styled.div`
  margin-top: 1.2rem;
  height: 20rem;
  border: 1px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .green {
    color: green;
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

  div {
    flex: 85%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;

    .sub-heading {
      font-size: 1.2rem;
    }
    p {
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    height: 10rem;
    h2 {
      font-size: 1rem;
    }
    div .sub-heading {
      font-size: 0.8rem;
    }
    div p {
      font-size: 1rem;
    }
  }
`;

export default TotalCases;
