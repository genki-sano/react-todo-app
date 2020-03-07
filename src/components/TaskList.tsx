import React from 'react'
import List from '@material-ui/core/List'
import TaskFooter from 'components/TaskFooter'
import TaskItem from 'components/TaskItem'
import { Task } from 'types/todos'

type TaskListProps = {
  tasks: Task[]
}

const TaskList: React.FC<TaskListProps> = props => {
  let activeCount = 0
  return (
    <>
      {props.tasks.length > 0 && (
        <List disablePadding role="list">
          {props.tasks.map((task: Task, i: number) => {
            activeCount = task.completed ? activeCount : activeCount + 1
            return (
              <TaskItem key={i} num={task.id} completed={task.completed}>
                {task.text}
              </TaskItem>
            )
          })}
        </List>
      )}
      {props.tasks.length > 0 && <TaskFooter count={activeCount} />}
    </>
  )
}

export default TaskList
