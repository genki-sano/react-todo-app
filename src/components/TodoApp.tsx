import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import Header from 'components/Header'
import TaskList from 'components/TaskList'
import { THEME } from 'constants/theme'
import taskModule, { useTodoSelector } from 'modules/taskModule'

const KEY_ENTER = 13

const Warp = styled(Paper)`
  margin-top: ${THEME.spacing(8)}px;
`

const FromWarp = styled(Paper)`
  padding-top: ${THEME.spacing(2)}px;
  padding-right: ${THEME.spacing(4)}px;
  padding-bottom: ${THEME.spacing(2)}px;
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
        <Warp>
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
          <TaskList tasks={state.tasks} />
        </Warp>
      </Container>
    </>
  )
}

export default TodoApp
