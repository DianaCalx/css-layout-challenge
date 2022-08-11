import ShareCard from '../ShareCard'
import { shareFiles } from '../../data'
import { DivFlex, ParRecent, ParView, ShareContent, FlexShare } from './shareWithMeComponents'

const SharedWithMe = () => {
  return (
    <ShareContent> 
      <DivFlex>
        <ParRecent>Share with Me</ParRecent>
        <ParView>View All</ParView>
      </DivFlex>
      <FlexShare>
        {shareFiles.map(s => (
          <ShareCard key={JSON.stringify(s)} file={s}/>
        ))}
      </FlexShare>
    </ShareContent>
  )
}

export default SharedWithMe