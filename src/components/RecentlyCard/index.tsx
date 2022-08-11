import UsersThumbnails from '../UsersThumbnails';
import { RecentlyCardC, SquareYell, DivFlex, ParName, ParCreated, Ellip } from './recentlyCardComponents';

interface RecentlyCardProps {
  ticket: {
    name: string;
    createdAt: string;
    usersCount: number;
  }
}

const RecentlyCard = ({ ticket: { name, createdAt, usersCount } }: RecentlyCardProps) => {
  return (
    <RecentlyCardC>
      <DivFlex>
        <SquareYell/> 
        <UsersThumbnails usersCount={usersCount} />
      </DivFlex>
      <div>
        <ParName>{name}</ParName>
        <ParCreated>Created: {createdAt}</ParCreated>
      </div>
      <Ellip/>
    </RecentlyCardC>
  )
}

export default RecentlyCard;
