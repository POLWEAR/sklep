import React, { useState } from 'react';
import styled from 'styled-components';

const SPACING = '10px';
const HEIGHT = '3px';

const HamburgerWrapper = styled.div((props) => {
  const hamburgerLine = `
    left: 0;
    width: 30px;
    height: ${HEIGHT};
    background: #181818;
    transition: 0.5s;
    position: absolute;

`;

  return `


  margin: 30px;
  width: 30px;
  position: relative;
  padding: 14px 0;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;

  .hamburger__box {
    width: 30px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger__inner {
    ${hamburgerLine}

    // top: 50%;
    width: 20px;
    transform: translateY(-50%);
    transition: background-color 0.1s ease-in-out;
  }

  .hamburger__inner::before,
  .hamburger__inner::after {
    ${hamburgerLine}

    content: '';
    transition: transform 0.2s ease-in-out;
  }

  .hamburger__inner::before {
    top: -${SPACING};
  }

  .hamburger__inner::after {
    top: ${SPACING};
  }

  &.hamburger--active {
    .hamburger__inner {
      background-color: transparent;
    }

    .hamburger__inner::before {
      transform: translateY(${SPACING}) rotate(45deg);
    }

    .hamburger__inner::after {
      transform: translateY(-${SPACING}) rotate(-45deg);
    }
  }
`;
});

const Hamburger = () => {
  const [active, toggle] = useState(false);
  return (
    <div>
      <HamburgerWrapper
        className={active ? 'hamburger--active' : null}
        onClick={() => toggle(!active)}
      >
        <span className="humburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </HamburgerWrapper>
    </div>
  );
};

export default Hamburger;
