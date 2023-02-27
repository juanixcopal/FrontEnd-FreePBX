import { useFetchInitFtpRecording } from '../../hooks/ftpRecording/index'

const PlayRecording = () => {
  const mainHook = useFetchInitFtpRecording()
  const { FetchFtpRecording } = mainHook
  const { ftpRecording } = FetchFtpRecording

  console.log(ftpRecording)

  const PlayRecording = name => {
    const audio = new Audio(`../../var/spool/asterisk/monitor/2023/02/23/${name}`)
    audio.play()
    console.log('Audio', audio)
  }

  return (
    <div>
      <h2>Reproducir Grabacion</h2>
      <ul>
        {ftpRecording.map(item => {
          const { type, name } = item

          return <li key={name}>{type === '-' && name.endsWith('.wav') && <button onClick={() => PlayRecording(name)}>{name}</button>}</li>
        })}
      </ul>
    </div>
  )
}
export default PlayRecording
