
import RecentlyUsed from '../RecentlyUsed';
import RecentlyFiles from '../RecentlyFiles';
import SharedWithMe from '../SharedWithMe';
import { SearchMain, MainContent, Search } from './mainComponents';

const Main = () => {
  return (
    <MainContent>
      <Search>
        <SearchMain type='text' placeholder='Search'/>
      </Search>
      <RecentlyUsed/>
      <RecentlyFiles/>
      <SharedWithMe/>
    </MainContent>
  )
}

export default Main