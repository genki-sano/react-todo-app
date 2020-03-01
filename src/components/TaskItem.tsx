import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp'
import { THEME } from 'constants/theme'
import taskModule from 'modules/taskModule'

const ListItemFirstAction = styled(ListItemIcon)`
  max-width: 100%;
`

const ListItemFirstActionInner = styled(FormControlLabel)`
  margin-right: 0;
`

interface TaskItemProps {
  num: number
  completed: boolean
}

const TaskCard: React.FC<TaskItemProps> = props => {
  const dispatch = useDispatch()

  const toggleTask = (id: number) => {
    dispatch(taskModule.actions.toggleTask(id))
  }

  const deleteTask = (id: number) => {
    dispatch(taskModule.actions.deleteTask(id))
  }

  return (
    <>
      <ListItem key={props.num} dense>
        <ListItemFirstAction>
          <ListItemFirstActionInner
            control={
              <Checkbox
                icon={<RadioButtonUncheckedSharpIcon />}
                checkedIcon={<DoneIcon />}
                color="primary"
                disableRipple
                checked={props.completed}
              />
            }
            label={props.children}
            onChange={() => {
              toggleTask(props.num)
            }}
            style={{
              color: `${
                props.completed
                  ? THEME.palette.text.disabled
                  : THEME.palette.text.primary
              }`,
              textDecoration: `${props.completed ? 'line-through' : 'none'}`,
            }}
          />
        </ListItemFirstAction>
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            onClick={() => {
              deleteTask(props.num)
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  )
}

export default TaskCard
