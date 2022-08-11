import { recently } from '../../data/index';
import RecentlyCard from '../RecentlyCard/index';
import {DivRec, ParRecently, DivSquare, SquareBlack, SquareGray, RecentlyContent} from './recentlyUsedComponents'

const RecentlyUsed = () => {
  return (
    <>
     <DivRec>
        <ParRecently>Recently Used</ParRecently>
        <DivSquare>
          <SquareBlack/>
          <SquareGray/>         
        </DivSquare>
      </DivRec>
      <RecentlyContent>
        {recently.map(ticket => (
          <RecentlyCard key={JSON.stringify(ticket)} ticket={ticket}  />
        ))}
      </RecentlyContent>
    </>
  )
}

export default RecentlyUsed