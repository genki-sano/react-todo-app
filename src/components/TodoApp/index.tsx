import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Header from '@/components/Header'
import TaskList from '@/components/TaskList'

const Warp = styled(Grid)`
  margin: 10px 0;
`

const TodoApp: React.FC = () => {
  return (
    <>
      <Header />
      <Warp container spacing={2}>
        <Grid item>
          <TaskList />
        </Grid>
      </Warp>
    </>
  )
}

export default TodoApp
