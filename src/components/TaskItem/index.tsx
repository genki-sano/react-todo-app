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

const ListItemText = styled(Typography)`
  color: ${THEME.palette.text.disabled};
  line-height: 1.1875em;
  padding: 7px 0 6px;
  text-decoration: line-through;
`

const ListItemInputBase = styled(InputBase)`
  padding: 7px 0 6px;
  textarea {
    letter-spacing: 0.00938em;
  }
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
          />
        </ListItemFirstAction>
        {props.completed ? (
          <ListItemText>{props.children}</ListItemText>
        ) : (
          <ListItemInputBase
            autoFocus={props.focus}
            fullWidth
            multiline
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              editTask(props.num, e.target.value)
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              const target = e.target as HTMLTextAreaElement
              if (target.value === '') {
                e.preventDefault()
              } else if (e.keyCode === KEY_ENTER) {
                addTask('')
                e.preventDefault()
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
