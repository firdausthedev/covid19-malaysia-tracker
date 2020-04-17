import React from 'react';
import styled from 'styled-components';

export const LoadingParas = (props) => {
  return <p className={props.loading ? 'loading-para' : props.className}>{props.children}</p>;
};

export const LoadingHeaders = (props) => {
  return <h2 className={props.loading ? 'loading-header' : props.className}>{props.children}</h2>;
};

export const LoadingCircle = () => {
  return (
    <LoadingCircleStyle className='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingCircleStyle>
  );
};

const LoadingCircleStyle = styled.div`
  display: block;
  position: relative;
  margin: auto;
  width: 80px;
  height: 40px;
  div {
    position: absolute;
    top: 15px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    &:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
