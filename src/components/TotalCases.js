import React from 'react';
import styled from 'styled-components';
import { LoadingParas, LoadingHeaders, LoadingCircle } from './LoadingUtils';

const TotalCases = ({ data, flag, history, loading, countryChange }) => {
  const getPreviousCase = (historyLength) => {
    if (!loading) {
      const todayCase = Object.values(history[historyLength - 1]);
      const yesterdayCase = Object.values(history[historyLength - 2]);
      const total = todayCase[1] - yesterdayCase[1];
      return total;
    }
  };
  const fatalityRate = ((data.deaths / data.cases) * 100).toFixed(2);
  const recoveryRate = ((data.recovered / data.cases) * 100).toFixed(2);

  return (
    <Card>
      {loading ? (
        <LoadingCircle />
      ) : (
        <h2 id='country-name'>
          {data.country}
          <span>
            <img src={flag} alt={data.country} className='img-flag' onClick={countryChange} />
          </span>
        </h2>
      )}

      <div id='card-container'>
        <div className='card'>
          <LoadingHeaders loading={loading}>{data.cases}</LoadingHeaders>
          <LoadingParas loading={loading}>Confirmed Cases</LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>
            {data.todayCases === 0 ? getPreviousCase(history.length) : data.todayCases}
          </LoadingHeaders>
          <LoadingParas loading={loading}>New Cases</LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>{data.active}</LoadingHeaders>
          <LoadingParas loading={loading}>Active cases</LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>{data.recovered}</LoadingHeaders>
          <LoadingParas loading={loading} className='text-green'>
            Recovered
          </LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>
            {data.critical === 0 ? data.tests : data.critical}
          </LoadingHeaders>
          <LoadingParas loading={loading}>
            {data.critical === 0 ? 'Tests Conducted' : 'Criticals'}
          </LoadingParas>
        </div>
        <div className='card'>
          <LoadingHeaders loading={loading}>{data.deaths}</LoadingHeaders>
          <LoadingParas loading={loading} className='text-red'>
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
  #country-name {
    font-size: 1.4rem;
    text-align: center;
    margin: 0.5rem 0;
    position: relative;
    span {
      img {
        width: 2.2rem;
        margin: auto 0.4rem;
        cursor: pointer;
      }
      i {
        font-size: 1.5rem;
        position: absolute;
        right: 0;
        margin-top: 3px;
        margin-right: 0.9rem;
        text-align: right;
      }
    }
  }
  #card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    .card {
      background: var(--white-color);
      display: flex;
      height: 10rem;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      border-radius: 6px;
      box-shadow: var(--box);
      h2 {
        color: var(--primary-color);
        font-size: 2.2rem;
        margin: 0rem 0;
      }
      p {
        font-size: 1.2rem;
        color: #606470;
      }
      .text-green {
        color: #639a67;
      }
      .text-red {
        color: #f73859;
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

      .card {
        height: 8rem;
        h2 {
          font-size: 2rem;
          margin: 0rem 0;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 420px) {
    #country-name {
      font-size: 1.1rem;
    }
    #card-container {
      .card {
        .loading-header {
          width: 6rem;
          height: 4rem;
        }

        height: 5rem;
        h2 {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default TotalCases;
