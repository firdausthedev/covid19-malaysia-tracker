import React from 'react';

export const LoadingParas = (props) => {
  return <p className={props.loading ? 'loading-para' : props.className}>{props.children}</p>;
};

export const LoadingHeaders = (props) => {
  return <h2 className={props.loading ? 'loading-header' : props.className}>{props.children}</h2>;
};
