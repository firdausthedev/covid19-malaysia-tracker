import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TotalCases = () => {
  const [loading, isLoading] = useState(true);
  const [country, setCountry] = useState('');
  const [totalCases, setTotalCases] = useState(0);

  useEffect(() => {
    getTotalCases();
  }, []);

  const getTotalCases = async () => {
    const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/all');
    const total = res.data.confirmed.locations[153].latest;
    const country = res.data.confirmed.locations[153].country;
    // console.log(res.data);
    isLoading(false);
    setTotalCases(total);
    setCountry(country);
  };

  return (
    <TotalCasesStyle>
      <h2>Total Cases in {country}</h2>
      <div>
        <p>
          Comfirmed cases : <strong>{!loading ? totalCases : 'loading..'}</strong>
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
    p {
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;

export default TotalCases;
