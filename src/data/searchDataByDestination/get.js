import axios from 'axios'

export const getDataByDestination = async ({ data }) => {
  const { dst } = data
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/search/dataByDestination`, { headers: { service: 'search-data-by-destination' }, params: { dst } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
