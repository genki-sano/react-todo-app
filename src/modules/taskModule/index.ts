import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TaskState, Task } from 'types/todos'
import { getStrage, setStrage } from 'utils/tasks'

const taskInitialState: TaskState = {
  tasks: [],
  nextTaskId: 0,
  focus: false,
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
      state.focus = true
      setStrage(state)
    },
    editTask: (
      state: TaskState,
      action: PayloadAction<{ id: number; text: string }>,
    ) => {
      const { id, text } = action.payload
      state.tasks.forEach(task => {
        if (task.id === id) {
          task.text = text
        }
      })
      state.focus = false
      setStrage(state)
    },
    toggleTask: (state: TaskState, action: PayloadAction<number>) => {
      const id = action.payload
      state.tasks.forEach(task => {
        task.completed = task.id === id ? !task.completed : task.completed
      })
      state.focus = false
      setStrage(state)
    },
    deleteTask: (state: TaskState, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task: Task) => {
        return task.id !== action.payload
      })
      state.focus = false
      setStrage(state)
    },
  },
})

export default taskModule
