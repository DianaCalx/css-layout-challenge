import { SearchMain, MainContent, Search, ParRecently, SquareBlack, SquareGray, DivSquare, DivRec } from './mainComponents';

const Main = () => {
  return (
    <MainContent>
      <Search>
        <SearchMain type='text' placeholder='Search'/>
      </Search>
      <DivRec>
        <ParRecently>Recently Used</ParRecently>
        <DivSquare>
          <SquareBlack/>
          <SquareGray/>         
        </DivSquare>
      </DivRec>
    </MainContent>
  )
}

export default Main