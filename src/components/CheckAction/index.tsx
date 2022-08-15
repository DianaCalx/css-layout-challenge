import { CheckActionContent, Square, CheckPar } from './checkActionComponents';

const CheckAction = ({action}: {action: string}) => {
  return (
    <CheckActionContent>
      <Square/>
      <CheckPar>{action}</CheckPar>
    </CheckActionContent>
  )
}

export default CheckAction


