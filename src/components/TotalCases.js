import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LoadingParas, { LoadingHeaders } from './loadingUtils';

const TotalCases = ({ data }) => {
  const [loading, isLoading] = useState(true);
  const [newCase, setNewCase] = useState([]);
  useEffect(() => {
    getTotalNewCases();
  }, []);

  const getTotalNewCases = async () => {
    const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/153');
    const history2 = res.data.location.timelines.confirmed.timeline;
    isLoading(false);
    setNewCase(Object.entries(history2));
  };
  const getPreviousCase = (numOfArray) => {
    let todayCase = newCase[numOfArray - 1];
    let yesterdayCase = newCase[numOfArray - 2];
    let todayCaseConverted = todayCase != null ? Object.values(todayCase) : {};
    let yesterdayCaseConverted = yesterdayCase != null ? Object.values(yesterdayCase) : {};
    const total = parseInt(todayCaseConverted[1]) - parseInt(yesterdayCaseConverted[1]);
    return !loading ? total : '';
  };
  return (
    <Card>
      <h2>{data.country}</h2>
      <div>
        <div className='card'>
          <h2>{data.cases}</h2>
          <LoadingParas loading={loading}>Confirmed Cases</LoadingParas>
        </div>
        <div className='card'>
          <h2>
            {data.todayCases === 0 ? getPreviousCase(parseInt(newCase.length)) : data.todayCases}
          </h2>
          <LoadingParas loading={loading}>New Cases</LoadingParas>
        </div>
        <div className='card'>
          <h2>{data.active}</h2>
          <LoadingParas loading={loading}>Active cases</LoadingParas>
        </div>
        <div className='card'>
          <h2>{data.recovered}</h2>
          <LoadingParas loading={loading} className='green'>
            Recovered
          </LoadingParas>
        </div>
        <div className='card'>
          <h2>{data.critical}</h2>
          <LoadingParas loading={loading}>Critical</LoadingParas>
        </div>
        <div className='card'>
          <h2>{data.deaths}</h2>
          <LoadingParas loading={loading} className='red'>
            Total Deaths
          </LoadingParas>
        </div>
      </div>
    </Card>
  );
  /* <TotalCasesStyle>
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
    </TotalCasesStyle> */
};

const Card = styled.div`
  h2 {
    font-size: 1.4rem;
    margin: 0.5rem 0;
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    .card {
      background: white;
      display: flex;
      height: 10rem;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 6px;
      box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);
      h2 {
        color: black;
        text-align: center;
        font-size: 3rem;
        margin: 0rem 0;
      }
      p {
        font-size: 1.2rem;
        text-align: center;
        color: #333;
      }
      .green {
        color: #639a67;
      }
      .red {
        color: #f73859;
      }
    }
  }

  @media (max-width: 588px) {
    div {
      grid-template-columns: repeat(2, 1fr);

      .card {
        h2 {
          font-size: 2rem;
          margin: 0rem 0;
        }
        p {
          font-size: 1rem;
          text-align: center;
          color: #333;
        }
      }
    }
  }
  @media (max-width: 420px) {
    h2 {
      text-align: center;
      font-size: 1.1rem;
    }
  }
`;

export default TotalCases;
