import React from 'react'
import List from '@material-ui/core/List'
import TaskItem from 'components/TaskItem'
import { Task } from 'types/todos'

type TaskListProps = {
  tasks: Task[]
  focus: boolean
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
