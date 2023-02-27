import { useState, useEffect } from 'react'
import { getDataByDestination } from '../../data/searchDataByDestination/get.js'

export const useFetchDataByDestination = ({ data }) => {
  const { dst } = data
  const [dataByDestination, setDataByDestination] = useState([])

  useEffect(() => {
    ;(async () => {
      await getDataByDestination({ data })
        .then(({ data }) => {
          setDataByDestination(data)
        })
        .catch(({ response }) => {
          console.log('ERROR FETCHDATA DATABYIDENTIFY', response)
        })
    })()
  }, [dst])

  return { dataByDestination }
}
