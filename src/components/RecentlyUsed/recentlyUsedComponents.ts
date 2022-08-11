import styled from 'styled-components';
import v from '../../styles/variables';

export const DivRec = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ParRecently = styled.p`
  font-size: 2rem;
`

export const SquareBlack = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid ${v.darkBlueColor};
`

export const SquareGray = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid ${v.lightGrayColor};
`

export const DivSquare = styled.div`
  display: flex;
  gap: 1rem;
`

export const RecentlyContent = styled.div`
  display: flex;
  gap: 1.4rem;
  width: 95%;
`
