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
  name: 'todos',
  initialState: taskInitialState,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<string>) => {
      state.tasks.push({
        id: state.nextTaskId++,
        text: action.payload,
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
