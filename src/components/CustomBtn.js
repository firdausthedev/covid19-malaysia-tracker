import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
const CustomBtn = (props) => {
  return <CustomBtnStyle {...props}>{props.children}</CustomBtnStyle>;
};
const CustomBtnStyle = styled(Link)`
  text-align: center;
  display: inline-block;
  text-decoration: none;
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.4rem 2rem;
  background: var(--accent-color);
  box-shadow: var(--box);

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 1.8rem;
    border-radius: 8px;
  }

  ${(props) =>
    props.black &&
    css`
      background: var(--primary-color);
      color: var(--white-color);

      svg {
        animation-play-state: paused;
      }
      &:hover {
        svg {
          animation-play-state: running;
        }
      }
    `}
`;

export default CustomBtn;
