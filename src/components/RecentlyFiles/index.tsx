
import { recentFiles } from '../../data'
import DescriptionFile from '../DescriptionFile'
import { RecentFContent, DivFlex, ParRecent, ParView, DivGrid } from './recentlyFilesComponents'

const RecentlyFiles = () => {
  return (
    <RecentFContent>
      <DivFlex>
        <ParRecent>Recent Files</ParRecent>
        <ParView>View All</ParView>
      </DivFlex>
      <DivGrid>
        <p> Name </p>
        <p> Members </p> 
        <p> Last Modified </p> 
      </DivGrid>
      <div>
        {recentFiles.map( file => (
          <DescriptionFile file={file}/>
        ))}
      </div>
    </RecentFContent>
  )
}

export default RecentlyFiles