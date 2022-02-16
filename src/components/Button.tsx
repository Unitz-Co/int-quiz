import React from 'react';
import styled from 'styled-components';
import { buttonSize, buttonVariant } from '../config/constants';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | string;
  variant?: 'contained' | 'outlined' | 'text' | string;
  active?: boolean;
  onClick?: () => void;
  style?: object;
}

type StyledButtonProps = {
  buttonSize: string;
  buttonVariant: string;
  active: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  ${props => props.buttonSize}
  ${props => props.buttonVariant}
  margin: 0;
  padding: 0;
  outline: 0;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.active && 'teal'};
  font-size: 16px;
`;

const Button = ({ size = 'medium', variant = 'outlined', active = false, children, ...props }: ButtonProps) => {
  return (
    <StyledButton
      buttonSize={buttonSize[size]}
      buttonVariant={buttonVariant[variant]}
      active={active}
      {...props}
    >{children}</StyledButton>
  );
}

export default Button;
