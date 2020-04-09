import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navbar = ({ icon, title }) => {
  return (
    <NavContainer>
      <Nav>
        <div className='title-wrapper'>
          <h2>
            <i className={icon} /> {title}
          </h2>
        </div>
        <ul>
          <li>
            <a
              href='https://github.com/firdausthedev/covid19-malaysia-tracker'
              rel='noopener noreferrer'
              target='_blank'
            >
              <li className='fab fa-github' /> Check out codes
            </a>
          </li>
        </ul>
      </Nav>
    </NavContainer>
  );
};

//default props if no props are entered
Navbar.defaultProps = {
  title: 'Covid-19 MY Tracker',
  icon: 'fas fa-virus',
};

//check and give warning to console if wrong props type are entered
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Nav = styled.nav`
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1.5rem;

  ul {
    display: flex;
  }

  a {
    color: #fff;
    background: #1e2022;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    margin: 0 0.25rem;

    &:hover {
      background: #fff;
      color: black;
      transition: 1s;
    }
  }

  .title-wrapper {
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 10px;

    h2 {
      font-size: 1.2rem;
    }

    i {
      transform: scale(1);
      animation: pulse 2s linear infinite;
    }
    @keyframes pulse {
      0% {
        transform: scale(1.3);
      }

      70% {
        transform: scale(1);
      }

      100% {
        transform: scale(1.3);
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    .title-wrapper {
      border-radius: 10px;
      margin-bottom: 1rem;
      h2 {
        font-size: 0.8rem;
      }
    }
    a {
      margin: 2rem 0.25rem;
    }
  }
`;

const NavContainer = styled.div`
  background-color: #1e2022;
  color: black;
`;

export default Navbar;
