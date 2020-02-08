import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

interface TaskState {
  task: string;
  tasks: string[];
}

interface TodoListState {
  todos: TaskState;
}

const taskInitialState: TaskState = {
  task: '',
  tasks: [],
};

const taskModule = createSlice({
  name: 'test',
  initialState: taskInitialState,
  reducers: {
    inputTask: (state: TaskState, action: PayloadAction<string>) => {
      state.task = action.payload;
    },
    addTask: (state: TaskState, action: PayloadAction<string>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const useTodoSelector = () => {
  return useSelector((state: TodoListState) => state.todos);
};

export default taskModule;
