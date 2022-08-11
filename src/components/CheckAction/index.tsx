import { CheckActionContent, CheckInput, CheckPar } from './checkActionComponents';

const CheckAction = ({action}: {action: string}) => {
  return (
    <CheckActionContent>
      <CheckInput type="checkbox"/>
      <CheckPar>{action}</CheckPar>
    </CheckActionContent>
  )
}

export default CheckAction


