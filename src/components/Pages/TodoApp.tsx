import React from 'react'
import { useDispatch } from 'react-redux'
import taskModule, { useTodoSelector } from '../../modules/taskModule'
import TodoList from '../Organisms/TodoList'

const TodoApp: React.FC = () => {
  const dispatch = useDispatch()
  const state = useTodoSelector()

  return (
    <div>
      <input
        type="text"
        onChange={e => dispatch(taskModule.actions.inputTask(e.target.value))}
      />
      <input
        type="button"
        value="add"
        onClick={() => dispatch(taskModule.actions.addTask(state.task))}
      />
      <TodoList />
    </div>
  )
}

export default TodoApp
