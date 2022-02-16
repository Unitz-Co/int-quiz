import React from 'react';
import styled from 'styled-components';

type InputProps = {
  onChange?: (key: string, value: string) => void;
}

const StyledInput = styled.input`
  border: 1px solid #08a1a0;
  outline: 0;
  border-radius: 4px;
  padding-left: 5px;
`;

const Input = ({ onChange, ...props }: InputProps) => {
  return (
    <StyledInput {...props} onChange={(e) => onChange?.('search', e.target.value)} />
  );
}

export default Input;
