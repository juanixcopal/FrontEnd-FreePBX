import { useState } from 'react'
import { useFetchDataByDestination } from './fetch-data'

export const useFetchInitDataByDestination = event => {
  const [data, setData] = useState('')

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const FetchDataByDestination = useFetchDataByDestination({ data })

  return {
    FetchDataByDestination,
    handleInputChange,
    data
  }
}
