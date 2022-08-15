import styled, { css } from 'styled-components';
import v from '../../styles/variables';


export const DivGrid = styled.div`
  margin-top: 1.6rem;
  display: grid;
  grid-template-columns: 5% 45% 20% 25% 5%;
  align-items: center;
  padding: 1rem;
  background-color: white;
  font-size: 1.2rem;
`

interface SquareProp {
  color: string;
}

export const ColorSquare = styled.div<SquareProp>`
  width: 2.1rem;
  height: 2.1rem;
  background-color: ${props => props.color};
  border-radius: 0.5rem;
`

export const ParGrayColor = styled.div`
  color: ${v.darkGrayColor2};
`