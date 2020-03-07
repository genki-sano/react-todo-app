import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp'
import { THEME } from 'constants/theme'
import taskModule from 'modules/taskModule'

const KEY_ENTER = 13

const ListItemFirstAction = styled(ListItemIcon)`
  min-width: 0;
`

const ListItemFirstActionInner = styled(FormControlLabel)`
  margin-right: 0;
`

const ListItemInputBase = styled(InputBase)`
  input {
    padding: 7px 0 6px;
  }
`

const ListItemText = styled(Typography)`
  color: ${THEME.palette.text.disabled};
  text-decoration: line-through;
`

interface TaskItemProps {
  num: number
  completed: boolean
  focus: boolean
}

const TaskCard: React.FC<TaskItemProps> = props => {
  const dispatch = useDispatch()

  const addTask = (text: string) => {
    dispatch(taskModule.actions.addTask(text))
  }

  const editTask = (id: number, text: string) => {
    dispatch(taskModule.actions.editTask({ id: id, text: text }))
  }

  const toggleTask = (id: number) => {
    dispatch(taskModule.actions.toggleTask(id))
  }

  const deleteTask = (id: number) => {
    dispatch(taskModule.actions.deleteTask(id))
  }

  return (
    <>
      <ListItem key={props.num} dense role="listitem">
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
            label=""
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
        {props.completed ? (
          <ListItemText>{props.children}</ListItemText>
        ) : (
          <ListItemInputBase
            autoFocus={props.focus}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLElement>) => {
              const target = e.target as HTMLInputElement
              editTask(props.num, target.value)
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
              if (e.keyCode === KEY_ENTER) {
                addTask('')
              }
            }}
            value={props.children}
          />
        )}
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
