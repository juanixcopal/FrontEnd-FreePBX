import { useFetchInitFtpRecording } from '../../hooks/ftpRecording/index'

const PlayRecording = () => {
  const mainHook = useFetchInitFtpRecording()
  const { FetchFtpRecording } = mainHook
  const { ftpRecording } = FetchFtpRecording

  console.log(ftpRecording)

  return (
    <div>
      <h2>Hola</h2>
    </div>
  )
}
export default PlayRecording
