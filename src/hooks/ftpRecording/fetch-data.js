import { useState, useEffect } from 'react'
import { getFtpRecording } from '../../data/ftpRecording/get.js'

export const useFetchFtpRecording = () => {
  const [ftpRecording, setFtpRecording] = useState([])

  useEffect(() => {
    ;(async () => {
      await getFtpRecording()
        .then(({ data }) => {
          setFtpRecording(data)
        })
        .catch(({ response }) => {
          console.log('ERROR FETCH FTPRECORDING', response)
        })
    })()
  }, [])

  return { ftpRecording }
}
