// ** Next Import
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Dialoge from './dialog'

// ** MUI Imports
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import { GridRowId } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import ButtonGroupSplit from 'src/views/components/button-group/ButtonGroupSplit'


interface TableHeaderProps {
  value: string
  selectedRows: GridRowId[]
  handleFilter: (val: string) => void
}

const TableHeaderSolicitud = (props: TableHeaderProps) => {
  // ** Props
  const { value, selectedRows, handleFilter } = props

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          placeholder='Buscar Solicitudes'
          sx={{ mr: 4, mb: 2, maxWidth: '300px' }}
          onChange={e => handleFilter(e.target.value)}
        /> 
      </Box>
      <Dialoge/>
      <Select
        size='small'
        displayEmpty
        defaultValue=''
        sx={{ mr: 4, mb: 2 }}
        disabled={selectedRows && selectedRows.length === 0}
        renderValue={selected => (selected.length === 0 ? 'Acciones' : selected)}
      >
        <MenuItem value=''>---</MenuItem>
        <MenuItem value='Eliminar'>Eliminar</MenuItem>
        <MenuItem value='Editar'>Editar</MenuItem>
        <MenuItem value='Enviar'>Enviar</MenuItem>
      </Select>
      
    </Box>

    
  )
}

export default TableHeaderSolicitud
