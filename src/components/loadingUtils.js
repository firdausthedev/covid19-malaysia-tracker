import React from 'react';
const LoadingParas = (props) => {
  return (
    <p
      className={props.className}
      style={props.loading ? { background: '#eeeef3', color: '#eeeef3' } : {}}
    >
      {props.children}
    </p>
  );
};

export const LoadingHeaders = (props) => {
  return (
    <h2
      style={
        props.loading
          ? {
              background: '#eeeef3',
              color: '#eeeef3',
              width: '10rem',
              height: '5rem',
              marginBottom: '10px',
            }
          : {}
      }
    >
      {props.children}
    </h2>
  );
};

export default LoadingParas;
