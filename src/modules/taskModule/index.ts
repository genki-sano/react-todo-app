import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { State } from 'types'
import { TaskState, Task } from 'types/todos'

const taskInitialState: TaskState = {
  tasks: [],
  nextTaskId: 0,
}

const taskModule = createSlice({
  name: 'todos',
  initialState: taskInitialState,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<string>) => {
      state.tasks.push({
        id: state.nextTaskId++,
        text: action.payload,
        completed: false,
      })
    },
    toggleTask: (state: TaskState, action: PayloadAction<number>) => {
      const id = action.payload
      state.tasks.forEach(task => {
        task.completed = task.id === id ? !task.completed : task.completed
      })
    },
    deleteTask: (state: TaskState, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task: Task) => {
        return task.id !== action.payload
      })
    },
  },
})

export const useTodoSelector = () => {
  return useSelector((state: State) => state.todos)
}

export default taskModule
