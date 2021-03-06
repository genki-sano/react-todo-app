import React from 'react'
import List from '@material-ui/core/List'
import TaskItem from 'components/TaskItem'
import { Task } from 'types/todos'

interface TaskListProps {
  tasks: Task[]
  focus: boolean
}

const TaskList: React.FC<TaskListProps> = props => {
  return (
    <>
      {props.tasks.length > 0 && (
        <List disablePadding role="list">
          {props.tasks.map((task: Task, i: number) => {
            return (
              <TaskItem
                key={i}
                num={task.id}
                completed={task.completed}
                focus={props.focus}
              >
                {task.text}
              </TaskItem>
            )
          })}
        </List>
      )}
    </>
  )
}

export default TaskList
