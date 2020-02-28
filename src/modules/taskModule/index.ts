import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TaskState, Task } from 'types/todos'
import { getStrage, setStrage } from 'utils/tasks'

const taskInitialState: TaskState = {
  tasks: [],
  nextTaskId: 0,
}

const taskModule = createSlice({
  name: 'todos',
  initialState: getStrage() || taskInitialState,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<string>) => {
      state.tasks.push({
        id: state.nextTaskId++,
        text: action.payload,
        completed: false,
      })
      setStrage(state)
    },
    toggleTask: (state: TaskState, action: PayloadAction<number>) => {
      const id = action.payload
      state.tasks.forEach(task => {
        task.completed = task.id === id ? !task.completed : task.completed
      })
      setStrage(state)
    },
    deleteTask: (state: TaskState, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task: Task) => {
        return task.id !== action.payload
      })
      setStrage(state)
    },
  },
})

export default taskModule
