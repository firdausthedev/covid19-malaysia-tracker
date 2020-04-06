import React from 'react';
import styled from 'styled-components';

const TodayDate = () => {
  let today = new Date();
  let month = today.getMonth();
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
    <DayTitleContainer>
      <DayTitle>{`${today.getDate()}${dateTh} ${monthString} ${today.getFullYear()}`}</DayTitle>
    </DayTitleContainer>
  );
};

const DayTitleContainer = styled.div`
  text-align: center;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  margin: auto;
  /* background-color: #e5e5e5; */
  border: 2px solid #e5e5e5;
  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);
`;

const DayTitle = styled.h2`
  color: black;
  display: inline-block;
`;

export default TodayDate;
