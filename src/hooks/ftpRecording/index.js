import { useFetchFtpRecording } from './fetch-data'

export const useFetchInitFtpRecording = () => {
  const FetchFtpRecording = useFetchFtpRecording()

  return {
    FetchFtpRecording
  }
}
