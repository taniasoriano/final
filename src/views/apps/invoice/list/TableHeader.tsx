// ** Next Import
import Link from 'next/link'
import Icon from 'src/@core/components/icon'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import { GridRowId } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

interface TableHeaderProps {
  value: string
  selectedRows: GridRowId[]
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
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
          placeholder='Buscar Nóminas'
          sx={{ mr: 4, mb: 2, maxWidth: '400px' }}
          onChange={e => handleFilter(e.target.value)}
        />     
        </Box> 
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

export default TableHeader
