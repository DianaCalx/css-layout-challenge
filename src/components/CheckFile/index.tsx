import { CheckFileContent, Square, CheckPar } from './checkFileComponents';

const CheckFile = ({fileType}: {fileType: string}) => {
  return (
    <CheckFileContent>
      <Square/>
      <CheckPar>{fileType}</CheckPar>
    </CheckFileContent>
  )
}

export default CheckFile