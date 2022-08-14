import styled from 'styled-components';
import v from '../../styles/variables';

export const CheckFileContent = styled.div`
  display: flex;
  height: 4.4rem;
  align-items: center;
  gap: 1rem;
  padding: 1.9rem 0;
  position: relative;

  &:hover {
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 0.7rem;
      height: 100%;
      background-color: #F5F6FC;
      top: 0;
      left: -3.2rem;
      border-top-right-radius: 0.7rem;
      border-bottom-right-radius: 0.7rem;
    }
  }
`

export const Square = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid white;
`
export const CheckPar = styled.p`
  color: white;
  font-size: 1rem;
`
