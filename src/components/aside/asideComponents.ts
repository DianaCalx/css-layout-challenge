import styled from 'styled-components';
import v from '../../styles/variables';

export const AsideContent = styled.div`
  width: 18%;
  padding: 3.6rem 3.2rem;
  background-color: ${v.darkBlueColor};
  height: 100vh;
  @media screen and (min-width: 1200px){
    max-width: 18rem;
  }
`
export const RectangleAside = styled.div`
  width: 7.4rem;
  height: 2.1rem;
  background: linear-gradient(270deg, #689EF8 0%, #FF6860 56.25%, #FF9F00 100%);
  border-radius: 5px;
  margin-bottom: 5rem;
`

export const DivActionAside = styled.div`
  margin-top: 5rem;
  border: 1px solid ${v.darkGrayColor};
  background-color: ${v.darkGrayColor};
  border-radius: 9px;
  padding: 1rem 1.4rem;
  width: 100%;
  max-width: 11.6rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 1.3rem;
    border-right: 1.5rem solid transparent;
    border-top: 1.5rem solid ${v.darkGrayColor};
    border-left: 1.5rem solid transparent;
  }
`
export const ButtonCreate = styled.button`
  border-radius: 7px;
  background-color: ${v.yellowColor};
  border: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 4rem;
  text-align: center;
  color: white;
  margin-top: 2rem;
  position: relative;
  width: 100%;
  max-width: 11.6rem;
  font-size: 1rem;

  ::before {
    content: '+';
    display: block;
    background-color: ${v.lightYellowColor};
    width: 2rem;
    height: 2rem;
    right: 0.4rem;
    top: 0.5rem;
    font-size: 2rem;
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    position: absolute;
  }
`