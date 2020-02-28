import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { State } from 'types'
import { TaskState, Task } from 'types/todos'

const taskState = localStorage.getItem('taskState') || 'null'
const taskInitialStorage: TaskState | null = JSON.parse(taskState) as TaskState

const taskInitialState: TaskState = {
  tasks: [],
  nextTaskId: 0,
}

const taskModule = createSlice({
  name: 'todos',
  initialState: taskInitialStorage || taskInitialState,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<string>) => {
      state.tasks.push({
        id: state.nextTaskId++,
        text: action.payload,
        completed: false,
      })
      localStorage.setItem('taskState', JSON.stringify(state))
    },
    toggleTask: (state: TaskState, action: PayloadAction<number>) => {
      const id = action.payload
      state.tasks.forEach(task => {
        task.completed = task.id === id ? !task.completed : task.completed
      })
      localStorage.setItem('taskState', JSON.stringify(state))
    },
    deleteTask: (state: TaskState, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task: Task) => {
        return task.id !== action.payload
      })
      localStorage.setItem('taskState', JSON.stringify(state))
    },
  },
})

export const useTodoSelector = () => {
  return useSelector((state: State) => state.todos)
}

export default taskModule
