import React from 'react';
import styled from 'styled-components';

const NewCases = ({ data }) => {
  return (
    <NewCaseStyle>
      <h2>New Cases</h2>

      <div>
        <p>
          <strong>{data.todayCases ? data.todayCases : 'loading..'}</strong>
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
