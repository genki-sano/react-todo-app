import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import InputBase from '@material-ui/core/InputBase'
import List from '@material-ui/core/List'
import { THEME } from 'constants/theme'
import taskModule from 'modules/taskModule'

const KEY_ENTER = 13

const Warp = styled(List)`
  padding-top: ${THEME.spacing(4)}px;
  padding-right: ${THEME.spacing(4)}px;
  padding-bottom: ${THEME.spacing(3)}px;
  padding-left: ${THEME.spacing(12)}px;
`

const TodoApp: React.FC = () => {
  const dispatch = useDispatch()

  const addTask = (task: string) => {
    dispatch(taskModule.actions.addTask(task))
  }

  return (
    <Warp>
      <InputBase
        fullWidth
        placeholder="What needs to be done?"
        onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
          const input = e.target as HTMLInputElement
          if (e.keyCode === KEY_ENTER && input.value !== '') {
            addTask(input.value)
            input.value = ''
          }
        }}
      />
    </Warp>
  )
}

export default TodoApp
