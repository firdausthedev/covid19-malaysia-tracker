import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Navbar = ({ icon, title }) => {
  return (
    <NavContainer id='navbar'>
      <Nav>
        <div className='title-wrapper'>
          <h2>
            <FontAwesomeIcon icon={faVirus} /> {title}
          </h2>
        </div>
        <ul>
          <li>
            <a
              href='https://github.com/firdausthedev/covid19-malaysia-tracker'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faGithub} /> Check out codes
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
    list-style: none;
    display: flex;
  }

  a {
    color: var(--white-color);
    background-color: var(--darkish-color);
    padding: 0.5rem 1rem;
    border-radius: 10px;
    margin: 0 0.25rem;
    text-decoration: none;

    &:hover {
      background: var(--white-color);
      color: var(--primary-color);
      transition: 1s;
    }
  }

  .title-wrapper {
    background: var(--white-color);
    padding: 0.5rem 1rem;
    border-radius: 10px;

    h2 {
      font-size: 1.2rem;
    }

    svg {
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
  background-color: var(--darkish-color);
  color: var(--primary-color);
`;

export default Navbar;
