import PieChart from '../PieChart/index';
import { documents } from '../../data';
import DocumentCard from '../DocumentCard';
import { InformationContent, DivFlex, DivFlexC, DivPie, GraySquare, Avatar, PercentInfo, DescStorage, ParStorage, DivFlexDoc, DivUpgrade, DivRecColor, ParDesc, ParBuy, ButtonB} from './informationComponents'

const Information = () => {
  return (
    <InformationContent>
      <DivFlex>
        <DivFlexC>
          <GraySquare/>
          <GraySquare/>
        </DivFlexC>
        <DivFlexC>
          <p>Diana</p>
          <Avatar/>
        </DivFlexC>
      </DivFlex>
      <div>
        <DescStorage>Storage</DescStorage>
        <DivPie> 
          <PercentInfo>85%<br/><span>Used</span></PercentInfo>
          <PieChart/>
        </DivPie>     
        <ParStorage>420.2 GB of 500 GB used</ParStorage>
      </div>
      <DivFlexDoc>
        {documents.map( d => (
         <DocumentCard data={d} key={JSON.stringify(d)}/>
        ))}
      </DivFlexDoc>
      <DivUpgrade>
        <DivRecColor/>
        <ParBuy>Buy more space now!</ParBuy>
        <ParDesc>Upgrade to cloud premium</ParDesc>
        <ButtonB>Upgrade Account!</ButtonB>
      </DivUpgrade>
    </InformationContent>
  )
}

export default Information