import styled, { css } from 'styled-components';

export const AppContent = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Circle = styled.div<{ color?: string }>`
  width: 18px;
  height: 18px;
  font-size: 8px;
  border: 1px solid black;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -5px;
  background-color: #fff;
  ${props => props.color && css`
    border-color: ${props.color};
  `}
`;
