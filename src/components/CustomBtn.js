import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CustomBtn = (props) => {
  return <CustomBtnStyle {...props}>{props.children}</CustomBtnStyle>;
};
const CustomBtnStyle = styled(Link)`
  text-align: center;
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.4rem 2rem;
  background: #f4e04d;
  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 1.8rem;
    border-radius: 8px;
  }
`;

export default CustomBtn;
