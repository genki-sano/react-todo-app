import React from 'react'
import { useDispatch } from 'react-redux'
import taskModule, { useTodoSelector } from '@/modules/taskModule'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const TodoApp: React.FC = () => {
  const dispatch = useDispatch()
  const state = useTodoSelector()

  const changeHandler = (task: string) => {
    dispatch(taskModule.actions.inputTask(task))
  }

  const clickHandler = (task: string) => {
    dispatch(taskModule.actions.addTask(task))
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            TodoApp
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <TextField onChange={e => changeHandler(e.target.value)} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => clickHandler(state.task)}
        >
          add
        </Button>
        {state.tasks.map((item, i) => {
          return (
            <Card>
              <CardContent>
                <Typography variant="h6" color="inherit">
                  {item}
                </Typography>
              </CardContent>
            </Card>
          )
        })}
      </Container>
    </>
  )
}

export default TodoApp
