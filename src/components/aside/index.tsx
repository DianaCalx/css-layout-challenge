import CheckFile from '../CheckFile';
import CheckAction from '../CheckAction';
import { fileTypes, actionFile } from '../../data'
import { AsideContent, RectangleAside, DivActionAside, ButtonCreate} from './asideComponents';

const Aside = () => {
  console.log(fileTypes);
  return (
    <AsideContent>
      <RectangleAside/>
      {(fileTypes as string[]).map( f => (
        <CheckFile key={f} fileType={f}/>
      ))}
      <DivActionAside>
        {(actionFile as string[]).map( a => (
          <CheckAction key={a} action={a}/>
        ))}      
      </DivActionAside>
      <ButtonCreate>Create New</ButtonCreate>
    </AsideContent>
  )
}

export default Aside