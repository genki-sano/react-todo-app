import React from 'react'
import AddTask from '../Molecules/AddTask'
import TodoList from '../Organisms/TodoList'

const TodoApp: React.FC = () => {
  return (
    <div>
      <AddTask />
      <TodoList />
    </div>
  )
}

export default TodoApp
