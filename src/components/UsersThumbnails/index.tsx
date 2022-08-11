import { UsersThumbnailsC } from './usersThumbnailsComp';
import { Circle } from '../../styles/components';

const colors = ['#4AC29D', '#FF6860', '#FF9F00', '#BEC0C8']

const UsersThumbnails = ({ usersCount, color }: { usersCount: number, color?: boolean }) => {

  const getCircles = () => {
    const circles: JSX.Element[] = [];
    
    if (usersCount > 3) {
      circles.push(<Circle key={`circle-${Math.random()}`} color={color ? colors[0] : colors[3]} />);
      circles.push(<Circle key={`circle-${Math.random()}`} color={color ? colors[1] : colors[3]} />);
      circles.push(<Circle key={`circle-${Math.random()}`} color={color ? colors[2] : colors[3]}>+{usersCount - 2}</Circle>);
    } else {
      for (let i = 0; i < usersCount; i++) {
        circles.push(<Circle key={`circle-${Math.random()}`} color={color ? colors[i] : colors[3]} />);
      }
    }
    return (
      <>
        {circles.map(circle => circle)}
      </>
    );
  };

  return (
    <UsersThumbnailsC>
      {getCircles()}
    </UsersThumbnailsC>
  )
}

export default UsersThumbnails