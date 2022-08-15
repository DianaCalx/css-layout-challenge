import UsersThumbnails from '../UsersThumbnails/index';
import { ShareCardContent, YellSquare, DivFlex, ParName, ParCreate } from './shareCardComponents'

interface ShareFile {
  file: {
    name: string,
    created: string,
    members: number
  }
}

const ShareCard = ({file: {name, created, members}}: ShareFile) => {
  return (
    <ShareCardContent>
      <DivFlex>
        <YellSquare/>
        <UsersThumbnails usersCount={members} color/>
      </DivFlex>
      <ParName>{name}</ParName>
      <ParCreate>Created: {created}</ParCreate>
    </ShareCardContent>
  )
}

export default ShareCard