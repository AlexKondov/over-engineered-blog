import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #fff;
  border: 0;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 20px;
  color: #f47555;
  border-radius: 3px;
  width: 300px;
  margin-top: 20px;
  transition: 0.3s;
  box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.06);
  font-family: 'Montserrat', sans-serif;
  &:hover {
    cursor: pointer;
    box-shadow: 0 18px 35px 0 rgba(42, 51, 83, 0.12),
      0 8px 15px rgba(0, 0, 0, 0.06);
    transform: translate(0px, -3px);
  }
  &:focus {
    outline: none;
  }
`;

type Props = {
  onClick: (args: any) => any;
  children: ReactNode;
};

const DefaultButton = ({ onClick, children }: Props) => (
  <Button onClick={onClick}>{children}</Button>
);

export default DefaultButton;
