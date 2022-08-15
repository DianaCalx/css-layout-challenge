import styled from 'styled-components';
import v from '../../styles/variables';
import { ReactComponent as Ellipsis } from '../../assets/ellipsis.svg';

export const RecentlyCardC = styled.div`
  width: 15.9rem;
  height: 13.3rem;
  background-color: white;
  padding: 1.7rem;
  box-shadow: 0px 4px 16px rgba(58, 58, 58, 0.07);
  border-radius: 12px;;
  position: relative;
`

export const SquareYell = styled.div`
  width: 3rem;
  height: 2.6rem;
  background-color: ${v.yellowColor};
  box-shadow: ${v.lightYellowColor2} -5px 5px;
  margin-right: 2rem;
`

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;
`

export const ParName = styled.p`
  font-size: 1.2rem;
`

export const ParCreated = styled.p`
  font-size: 0.8rem;
  color: ${v.lightGrayColor2};
`

export const Ellip = styled(Ellipsis)`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
`