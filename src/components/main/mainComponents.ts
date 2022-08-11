import styled from 'styled-components';
import v from '../../styles/variables';


export const MainContent = styled.div`
    flex: 1;
    margin-left: 1%;
    margin-right: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${v.backgroundColor};
`
export const Search = styled.div`
  position: relative;
  width: 96%;;
  ::before { 
    position: absolute;
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    top: 3.5rem;
    left: 1rem;   
    border: 1px solid ${v.searchColor};
    z-index: 100;
  }
`
export const SearchMain = styled.input`
  width: 100%;
  margin-top: 2.5rem;
  border-radius: none;
  border: none;
  padding: 1rem 1rem 1rem 3.4rem;
  position: relative;
`

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