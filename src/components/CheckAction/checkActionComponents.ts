import styled from 'styled-components';
import v from '../../styles/variables';

export const CheckActionContent = styled.div`
  display: flex;
  align-items: center;

  &:hover{
    cursor: pointer;
  }
`

export const Square = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid white;
  margin-right: 0.7rem;
`

export const CheckPar = styled.p`
  color: white;
  font-size: 1rem;
`
