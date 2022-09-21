import styled, { css } from 'styled-components';

export const SelectViewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  ${props => props.src && css`
    background: url(${props.src});
  `};
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  background-position: center !important;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    ${props => props.src && css`
      background: url(${props.hoverSrc});
    `};
  }

  &:last-child {
    margin-right: 0;
  }

  ${props => props.selected && props.hoverSrc && css`
    background: url(${props.hoverSrc});
  `};
`;
