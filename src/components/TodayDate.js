import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { HEARTBEAT, ROLLIN } from './style/animation';

const TodayDate = ({ darkModeFunc, darkMode }) => {
  const today = new Date();
  const month = today.getMonth();
  let monthString = '';
  let dateTh = '';

  switch (month) {
    case 0:
      monthString = 'Jan';
      break;
    case 1:
      monthString = 'Feb';
      break;
    case 2:
      monthString = 'Mar';
      break;
    case 3:
      monthString = 'Apr';
      break;
    case 4:
      monthString = 'May';
      break;
    case 5:
      monthString = 'Jun';
      break;
    case 6:
      monthString = 'Jul';
      break;
    case 7:
      monthString = 'Aug';
      break;
    case 8:
      monthString = 'Sep';
      break;
    case 9:
      monthString = 'Oct';
      break;
    case 10:
      monthString = 'Nov';
      break;
    default:
      monthString = 'Dec';
  }

  if (today.getDate() === 1) dateTh = 'st';
  else if (today.getDate() === 2) dateTh = 'nd';
  else if (today.getDate() === 3) dateTh = 'rd';
  else dateTh = 'th';

  return (
    <DayTitleContainer id='today-date'>
      <DayTitle>{`${today.getDate()}${dateTh} ${monthString} ${today.getFullYear()}`}</DayTitle>
      <div id='today-date-theme-icon'>
        <span onClick={() => darkModeFunc(darkMode)}>
          {darkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </span>
      </div>
    </DayTitleContainer>
  );
};

const DayTitleContainer = styled.div`
  text-align: center;
  padding: 0.7rem 0rem;
  border-radius: 10px;
  margin: auto;
  background: var(--white-color);
  box-shadow: var(--box);
  position: relative;

  #today-date-theme-icon {
    display: inline-block;
    position: absolute;
    right: 0;
    margin-right: 0.7rem;
    text-align: right;
    font-size: 1.4rem;
    transition: 1.5s;
    ${ROLLIN}
    span svg {
      :hover {
        cursor: pointer;
        ${HEARTBEAT}
      }
    }
  }
`;

const DayTitle = styled.h2`
  color: var(--primary-color);
  display: inline-block;
  @media (max-width: 420px) {
    font-size: 1.3rem;
  }
`;

export default TodayDate;
