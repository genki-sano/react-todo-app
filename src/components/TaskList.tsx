import React from 'react'
import List from '@material-ui/core/List'
import TaskItem from 'components/TaskItem'
import { Task } from 'types/todos'

type TaskListProps = {
  tasks: Task[]
}

const TaskList: React.FC<TaskListProps> = props => {
  return (
    <>
      {props.tasks.length > 0 && (
        <List>
          {props.tasks.map(task => {
            return <TaskItem key={task.id}>{task.text}</TaskItem>
          })}
        </List>
      )}
    </>
  )
}

export default TaskList
