// ** React Imports
import { SyntheticEvent } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

// ** Types
import { ProfileTeamsTechType, ProfileConnectionsType } from 'src/@fake-db/types'

interface Props {
  teams: ProfileTeamsTechType[]
  connections: ProfileConnectionsType[]
}

const ConnectionsTeams = ({ connections, teams }: Props) => {
  return (
    <div></div>
  )
}

export default ConnectionsTeams
