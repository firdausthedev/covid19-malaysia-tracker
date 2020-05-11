import React from 'react';
import CustomBtn from './../CustomBtn';
import styled, { css } from 'styled-components';

const Page404 = ({ darkMode }) => {
  return (
    <NotFoundStyle id='not-found' darkmode={darkMode}>
      <div>
        <CustomBtn to='/'>Back</CustomBtn>
      </div>
      <h2>Page not found</h2>
    </NotFoundStyle>
  );
};

const NotFoundStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 0 0.8rem 0;

  div {
    display: inline-block;
    margin: auto 0;
  }
  h2 {
    text-align: center;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1rem;
    }
  }

  ${(props) =>
    props.darkmode &&
    css`
      color: var(--white-color);
    `}
`;

export default Page404;
