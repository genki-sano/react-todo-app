import React from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp'
import { Theme } from 'constants/theme'
import taskModule from 'modules/taskModule'

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
    <ListItem key={props.num} dense>
      <ListItemIcon>
        <FormControlLabel
          control={
            <Checkbox
              icon={<RadioButtonUncheckedSharpIcon />}
              checkedIcon={<DoneIcon />}
              color="primary"
              disableRipple
            />
          }
          label={props.children}
          onChange={() => {
            toggleTask(props.num)
          }}
          style={{
            color: `${
              props.completed
                ? Theme.palette.text.disabled
                : Theme.palette.text.primary
            }`,
            textDecoration: `${props.completed ? 'line-through' : 'none'}`,
          }}
        />
      </ListItemIcon>
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
  )
}

export default TaskCard
