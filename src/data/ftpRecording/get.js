import axios from 'axios'

export const getFtpRecording = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/search/dataByDestination`, { headers: { service: 'play-recording' } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
