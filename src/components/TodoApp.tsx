import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Header from 'components/Header'
import TaskList from 'components/TaskList'
import { Theme } from 'constants/theme'

const Warp = styled(Paper)`
  margin-top: ${Theme.spacing(8)}px;
`

const TodoApp: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Warp>
          <TaskList />
        </Warp>
      </Container>
    </>
  )
}

export default TodoApp
