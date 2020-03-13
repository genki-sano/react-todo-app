import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import AddIcon from '@material-ui/icons/Add'
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp'
import Header from 'components/Header'
import TaskList from 'components/TaskList'
import { THEME } from 'constants/theme'
import { COLOR } from 'constants/color'
import taskModule from 'modules/taskModule'
import { useTodoSelector } from 'utils/tasks'

const Warp = styled(Card)`
  margin-top: ${THEME.spacing(20)}px;
  position: relative;
  overflow: visible;
`

const ListHeader = styled(CardHeader)`
  padding: ${THEME.spacing(4)}px ${THEME.spacing(4)}px ${THEME.spacing(4)}px
    ${THEME.spacing(24)}px;
`

const HeaderIcon = styled(Paper)`
  background-color: ${COLOR.blue.d};
  position: absolute;
  top: -${THEME.spacing(7)}px;
  left: ${THEME.spacing(5)}px;
  padding: ${THEME.spacing(5)}px ${THEME.spacing(5)}px ${THEME.spacing(4)}px;
  color: #fff;
`

const AddButton = styled(Button)`
  padding-left: ${THEME.spacing(3)}px;
  padding-right: ${THEME.spacing(3)}px;
`

const TodoApp: React.FC = () => {
  const state = useTodoSelector()
  const dispatch = useDispatch()

  const addTask = (text: string) => {
    dispatch(taskModule.actions.addTask(text))
  }

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Warp elevation={3}>
          <ListHeader
            avatar={
              <HeaderIcon elevation={3}>
                <FormatListBulletedSharpIcon fontSize="large" />
              </HeaderIcon>
            }
            title="Task List"
            titleTypographyProps={{ variant: 'h6' }}
          />
          <Divider />
          <TaskList tasks={state.tasks} focus={state.focus} />
          <CardActions>
            <AddButton
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => {
                addTask('')
              }}
            >
              ADD TASK
            </AddButton>
          </CardActions>
        </Warp>
      </Container>
    </>
  )
}

export default TodoApp
