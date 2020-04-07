import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TotalCases = () => {
  const [loading, isLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');
  const [country, setCountry] = useState('');
  const [totalCases, setTotalCases] = useState(0);

  useEffect(() => {
    getTotalCases();
  }, []);

  const getTotalCases = async () => {
    const res = await axios.get(
      'https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=MY'
    );

    // console.log(res.data);
    const total = res.data.latest.confirmed;
    const country = res.data.locations[0].country;
    const lastUpd = res.data.locations[0].last_updated;
    // console.log(lastUpd);
    const date = new Date(lastUpd);
    const nowDate = date.toUTCString();
    setLastUpdated(nowDate);
    isLoading(false);
    setTotalCases(total);
    setCountry(country);
  };

  return (
    <TotalCasesStyle>
      <h2>Total Cases in {country}</h2>
      <div>
        <p>
          Confirmed cases :{' '}
          <strong>
            {!loading ? totalCases : 'loading..'}
            {/* {console.log(lastUpdated.substring(0, 24))} */}
          </strong>
        </p>
        <p id='last-update'>
          Last updated: <strong>{lastUpdated.substring(4, 22)}</strong>
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

    #last-update {
      font-size: 1.2rem;
    }
    p {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  @media (max-width: 480px) {
    height: 10rem;
    h2 {
      font-size: 1rem;
    }
    div #last-update {
      font-size: 0.8rem;
    }
    div p {
      font-size: 1rem;
    }
  }
`;

export default TotalCases;
