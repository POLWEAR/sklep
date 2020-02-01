import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background: #dc143c;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  width: 100%;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

const DisabledButton = styled(ButtonWrapper)`
  background: #aaaaaa;
`;

const Button = ({ onClick, children, disabled }) => (
  <>
    {disabled ? (
      <DisabledButton disabled>{children}</DisabledButton>
    ) : (
      <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
    )}
  </>
);

export default Button;
