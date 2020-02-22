import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Color } from '@/constants/Color'

const Warp = styled(AppBar)`
  background-color: ${Color.blue.d};
  background: linear-gradient(90deg, ${Color.blue.d}, ${Color.green.d});
`

const Header: React.FC = () => {
  return (
    <Warp position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          TodoApp
        </Typography>
      </Toolbar>
    </Warp>
  )
}

export default Header
