import React from 'react';
import styled from 'styled-components';
import LoadingParas, { LoadingHeaders } from './loadingUtils';

const TotalCases = ({ data, flag, history, loading }) => {
  const getPreviousCase = (numOfArray) => {
    let todayCase = history[numOfArray - 1];
    let yesterdayCase = history[numOfArray - 2];
    let todayCaseConverted = todayCase != null ? Object.values(todayCase) : {};
    let yesterdayCaseConverted = yesterdayCase != null ? Object.values(yesterdayCase) : {};
    const total = parseInt(todayCaseConverted[1]) - parseInt(yesterdayCaseConverted[1]);
    return !loading ? total : '';
  };
  const fatalityRate = ((data.deaths / data.cases) * 100).toFixed(2);
  const recoveryRate = ((data.recovered / data.cases) * 100).toFixed(2);

  return (
    <Card>
      <h2>
        {data.country}
        <span>
          <img src={flag} alt={data.country} className='img-flag' />
        </span>
      </h2>

      <div id='card-container'>
        <div className='card'>
          <LoadingHeaders loading={loading}>{data.cases}</LoadingHeaders>
          <LoadingParas loading={loading}>Confirmed Cases</LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>
            {data.todayCases === 0 ? getPreviousCase(parseInt(history.length)) : data.todayCases}
          </LoadingHeaders>
          <LoadingParas loading={loading}>New Cases</LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>{data.active}</LoadingHeaders>
          <LoadingParas loading={loading}>Active cases</LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>{data.recovered}</LoadingHeaders>
          <LoadingParas loading={loading} className='green'>
            Recovered
          </LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>{data.critical}</LoadingHeaders>
          <LoadingParas loading={loading}>Critical</LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>{data.deaths}</LoadingHeaders>
          <LoadingParas loading={loading} className='red'>
            Total Deaths
          </LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>{fatalityRate}%</LoadingHeaders>
          <LoadingParas loading={loading}>Fatality Rate</LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>{recoveryRate}%</LoadingHeaders>
          <LoadingParas loading={loading}>Recovery Rate</LoadingParas>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  h2 {
    font-size: 1.4rem;
    text-align: center;
    margin: 0.5rem 0;
    span {
      margin: 0;
      padding: 0;
      /* background: black; */
    }
  }

  .alert {
    display: block;
    background: red;
    height: 2rem;
  }

  .img-flag {
    width: 2.2rem;
    margin: auto 0.4rem;
  }
  #card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
        font-size: 2.2rem;
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
    .two-infos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .two-infos-items {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
          font-size: 2rem;
        }
      }
    }
  }
  @media (max-width: 680px) {
    #card-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 588px) {
    #card-container {
      grid-template-columns: repeat(2, 1fr);
      two-infos {
        grid-template-columns: repeat(1, 1fr);
      }
      .card {
        height: 8rem;
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
      font-size: 1.1rem;
    }
    #card-container {
      grid-template-columns: repeat(2, 1fr);
      .card {
        height: 5rem;
        h2 {
          font-size: 1.3rem;
          margin: 0rem 0;
        }
      }
    }
  }
`;

export default TotalCases;
