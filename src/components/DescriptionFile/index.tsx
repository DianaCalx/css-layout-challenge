import { ReactComponent as Ellipsis } from '../../assets/ellipsisHor.svg';
import { DivGrid, ColorSquare, ParGrayColor } from './DescriptionFileComponentes'

interface DescriptionProps {
  file: {
    name: string,
    members:  string,
    lastModified: string,
    color: string
  }
}

const DescriptionFile = ({file : {name,members, lastModified, color}}: DescriptionProps) => {
  return (
    <DivGrid>
      <ColorSquare color={color}/>
      <div>{name}</div>
      <ParGrayColor>{members}</ParGrayColor>
      <ParGrayColor>{lastModified}</ParGrayColor>
      <Ellipsis/>
    </DivGrid>
  )
}

export default DescriptionFile