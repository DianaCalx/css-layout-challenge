import { ColorSquare, DivFlex, DivDescrip, ParName, ParFile, ParStorage } from './documentCardComponents';

interface DocumentsCard {
  data: {
    name: string,
    files: string,
    storage: string,
    color: string
  }
}
const DocumentCard = ({data: { name,files,storage,color }} : DocumentsCard) => {
  return (
    <DivFlex>
      <ColorSquare color={color}/>
      <DivDescrip>
        <ParName>{name}</ParName>
        <ParFile>{files}</ParFile>
      </DivDescrip>
      <ParStorage>{storage}</ParStorage>
    </DivFlex>
  )
}

export default DocumentCard