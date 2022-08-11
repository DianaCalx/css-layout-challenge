import { CheckFileContent, CheckInput, CheckPar } from './checkFileComponents';

const CheckFile = ({fileType}: {fileType: string}) => {
  return (
    <CheckFileContent>
      <CheckInput type="checkbox"/>
      <CheckPar>{fileType}</CheckPar>
    </CheckFileContent>
  )
}

export default CheckFile