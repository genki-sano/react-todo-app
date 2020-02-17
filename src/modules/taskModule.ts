import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

interface Task {
  id: number
  text: string
}
interface TaskState {
  tasks: Task[]
  nextTaskId: number
}

interface State {
  todos: TaskState
}

const taskInitialState: TaskState = {
  tasks: [],
  nextTaskId: 0,
}

const taskModule = createSlice({
  name: 'test',
  initialState: taskInitialState,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<string>) => {
      state.tasks.push({
        id: state.nextTaskId++,
        text: action.payload,
      })
    },
  },
})

export const useTodoSelector = () => {
  return useSelector((state: State) => state.todos)
}

export default taskModule
