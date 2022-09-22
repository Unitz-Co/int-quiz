import styled from 'styled-components';

export const Icon = styled.img`
  width: 0.8rem; 
`;

export const Dots = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  background: #B2F5EA;
  margin-right: 0.5rem;
  border-radius: 50%;

  &.offline {
    background: #edf2f7;
  }
`;