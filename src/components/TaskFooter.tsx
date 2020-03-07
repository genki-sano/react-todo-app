import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import { THEME } from 'constants/theme'

const ActiveCount = styled(Typography)`
  margin-left: ${THEME.spacing(1)}px;
  margin-right: ${THEME.spacing(1)}px;
`

type TaskFooterProps = {
  count: number
}

const TaskList: React.FC<TaskFooterProps> = props => {
  return (
    <List>
      <ListItem>
        <ActiveCount>{props.count}</ActiveCount>
        <Typography color="textSecondary" variant="body2">
          item list
        </Typography>
      </ListItem>
    </List>
  )
}

export default TaskList
