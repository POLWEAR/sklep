import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background: #dc143c;
  border: none;
  color: white;
  padding: 10px;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

const Button = ({ children }) => <ButtonWrapper>{children}</ButtonWrapper>;

export default Button;
