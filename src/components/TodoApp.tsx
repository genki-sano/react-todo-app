import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Header from 'components/Header'
import List from '@material-ui/core/List'
import TaskList from 'components/TaskList'
import { THEME } from 'constants/theme'
import taskModule from 'modules/taskModule'
import { useTodoSelector } from 'utils/tasks'

const KEY_ENTER = 13

const Warp = styled(Paper)`
  margin-top: ${THEME.spacing(8)}px;
`

const FromWarp = styled(List)`
  padding-top: ${THEME.spacing(4)}px;
  padding-right: ${THEME.spacing(4)}px;
  padding-bottom: ${THEME.spacing(3)}px;
  padding-left: ${THEME.spacing(12)}px;
`

const TodoApp: React.FC = () => {
  const dispatch = useDispatch()
  const state = useTodoSelector()

  const addTask = (task: string) => {
    dispatch(taskModule.actions.addTask(task))
  }

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Warp elevation={3}>
          <FromWarp>
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
          </FromWarp>
          <Divider />
          <TaskList tasks={state.tasks} />
        </Warp>
      </Container>
    </>
  )
}

export default TodoApp
