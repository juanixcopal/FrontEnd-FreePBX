import { useFetchInitDataByDestination } from '../../hooks/searchDataByDestination/index'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, TextField, Button } from '@mui/material'

const SearchDataByDestination = () => {
  const mainHook = useFetchInitDataByDestination()

  const { FetchDataByDestination, handleInputChange, data } = mainHook

  const { dst } = data
  const { dataByDestination } = FetchDataByDestination

  return (
    <div>
      <div>
        <form>
          <TextField name='dst' label='Buscar Destino' value={dst} onChange={handleInputChange} />
          {/* <Button variant='contained' onClick={() => FetchDataByDestination()}>
            Buscar
          </Button> */}
        </form>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Fecha Llamada</TableCell>
              <TableCell>Numero Origen</TableCell>
              <TableCell>Numero Destino</TableCell>
              <TableCell>Grabacion</TableCell>
              <TableCell>Id Grabacion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataByDestination.map((item, key) => {
              const { recordingfile, calldate, dst, src, uniqueid } = item
              return (
                <TableRow key={key}>
                  <TableCell>{calldate}</TableCell>
                  <TableCell>{src}</TableCell>
                  <TableCell>{dst}</TableCell>
                  <TableCell>{recordingfile}</TableCell>
                  <TableCell>{uniqueid}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default SearchDataByDestination
