import { useSelector } from 'react-redux'
import { State } from 'types'
import { TaskState } from 'types/todos'

export const getStrage = () => {
  const taskState = localStorage.getItem('taskState') || 'null'
  const taskInitialStorage: TaskState | null = JSON.parse(
    taskState,
  ) as TaskState

  return taskInitialStorage
}

export const setStrage = (data: TaskState) => {
  data.tasks.length > 0
    ? localStorage.setItem('taskState', JSON.stringify(data))
    : localStorage.removeItem('taskState')
}

export const useTodoSelector = () => {
  return useSelector((state: State) => state.todos)
}
