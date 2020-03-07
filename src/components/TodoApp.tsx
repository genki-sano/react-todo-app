import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Header from 'components/Header'
import TaskForm from 'components/TaskFrom'
import TaskList from 'components/TaskList'
import { THEME } from 'constants/theme'
import { useTodoSelector } from 'utils/tasks'

const Warp = styled(Paper)`
  margin-top: ${THEME.spacing(8)}px;
`

const TodoApp: React.FC = () => {
  const state = useTodoSelector()

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Warp elevation={3}>
          <TaskForm />
          <Divider />
          <TaskList tasks={state.tasks} />
        </Warp>
      </Container>
    </>
  )
}

export default TodoApp
