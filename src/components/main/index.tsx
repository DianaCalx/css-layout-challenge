import { SearchMain, MainContent, Search } from './mainComponents';

const Main = () => {
  return (
    <MainContent>
      <Search>
        <SearchMain type='text' placeholder='Search'/>
      </Search>
    </MainContent>
  )
}

export default Main