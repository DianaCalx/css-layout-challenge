import styled from 'styled-components';
import v from '../../styles/variables';

interface SquareProp {
  color: string;
}

export const ColorSquare = styled.div<SquareProp>`
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${props => props.color};
  border-radius: 0.5rem;
`

export const DivFlex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid ${v.marginColor};
`

export const DivDescrip = styled.div`
  margin-right: 6rem;
`

export const ParName = styled.p`
  margin: 0;
  font-size: 1rem;
`

export const ParFile = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${v.darkGrayColor2};
`

export const ParStorage = styled.p`
  margin: 0;
  font-size: 0.8rem;
`