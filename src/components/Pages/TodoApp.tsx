import React from 'react'
import AddTask from '@/components/Molecules/AddTask'
import TodoList from '@/components/Organisms/TodoList'

const TodoApp: React.FC = () => {
  return (
    <div>
      <AddTask />
      <TodoList />
    </div>
  )
}

export default TodoApp
