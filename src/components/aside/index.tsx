import CheckFile from '../CheckFile';
import CheckAction from '../CheckAction';
import { fileTypes, actionFile } from '../../data'
import { AsideContent, RectangleAside, DivActionAside, ButtonCreate} from './asideComponents';

const Aside = () => {
  return (
    <AsideContent>
      <div>
        <RectangleAside/>
        {(fileTypes as string[]).map( f => (
          <CheckFile key={f} fileType={f}/>
        ))}
      </div>
      <div>
        <DivActionAside>
          {(actionFile as string[]).map( a => (
            <CheckAction key={a} action={a}/>
          ))}      
        </DivActionAside>
        <ButtonCreate>Create New</ButtonCreate>
      </div>
    </AsideContent>
  )
}

export default Aside