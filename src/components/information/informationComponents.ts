import styled from 'styled-components';
import { ReactComponent as Avat } from '../../assets/avatar.svg';
import v from '../../styles/variables';

export const InformationContent = styled.div`
  width: 25%;
  padding: 3.4rem;
  background-color: ${v.backgroundColor};
  height: 100vh;
`
export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`
export const DivFlexC = styled.div`
  display: flex;
  gap: 1.3rem;
  p {
    margin: 0;
  }
  align-items: center;
`
export const GraySquare = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${v.darkGrayColor3};
`
export const Avatar = styled(Avat)`
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 50%;
  border: 1px solid black;
`
export const DivPie = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PercentInfo = styled.div`
  width: 100%;
  height: 4rem;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -1.1rem;
  margin-left: 0.1rem;
  line-height: 1.9rem;
  text-align: center;
  z-index: 100;
  font-size: 2.4rem;
  
  span {
    font-size: 1.4rem;
    color: ${v.darkGrayColor2};
  }
`

export const DescStorage = styled.div`
  font-size: 2rem;
  margin-bottom: 0 0 2.2rem 0;

`

export const ParStorage = styled.p`
  text-align: center;
  margin: 0;
  font-size: 0.8rem;
  color: ${v.darkGrayColor2};
  margin: 2rem 0 2.7rem 0;
  text-align: center;
`

export const DivFlexDoc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`

export const DivUpgrade = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 1.8rem;
  margin-top: 2rem;
  padding: 1.7rem 3.7rem;
`

export const DivRecColor = styled.div`
  width: 11.9rem;
  height: 7.3rem;
  background: linear-gradient(270.15deg, #689FF8 0.15%, #FF6860 54.7%, #FF9F00 99.9%);
  border-radius: 11px;
  margin-bottom: 2.3rem;
`

export const ParBuy = styled.p`
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
`

export const ParDesc = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${v.darkGrayColor2};
  text-align: center;
`

export const ButtonB = styled.button`
  background-color: ${v.yellowColor};
  width: 11.6rem;
  height: 3rem;
  border: none;
  color: white;
  font-size: 1rem;
  text-align: center;
  border-radius: 0.7rem;
  margin-top: 1rem;
`