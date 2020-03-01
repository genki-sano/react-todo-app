import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import TaskItem from 'components/TaskItem'
import { Task } from 'types/todos'
import { THEME } from 'constants/theme'

const Warp = styled(List)`
  padding-top: 0;
  padding-bottom: 0;
`

const ActiveCount = styled(Typography)`
  margin-left: ${THEME.spacing(1)}px;
  margin-right: ${THEME.spacing(1)}px;
`

type TaskListProps = {
  tasks: Task[]
}

const TaskList: React.FC<TaskListProps> = props => {
  let activeCount = 0
  return (
    <>
      {props.tasks.length > 0 && (
        <Warp>
          {props.tasks.map((task: Task, i: number) => {
            activeCount = task.completed ? activeCount : activeCount + 1
            return (
              <TaskItem key={i} num={task.id} completed={task.completed}>
                {task.text}
              </TaskItem>
            )
          })}
        </Warp>
      )}
      {props.tasks.length > 0 && (
        <List component="nav">
          <ListItem>
            <ActiveCount>{activeCount}</ActiveCount>
            <Typography color="textSecondary" variant="body2">
              Tasks
            </Typography>
          </ListItem>
        </List>
      )}
    </>
  )
}

export default TaskList
