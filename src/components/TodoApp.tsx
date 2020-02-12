import React from 'react'
import { useDispatch } from 'react-redux'
import taskModule, { useTodoSelector } from '@/modules/taskModule'

const TodoApp: React.FC = () => {
  const dispatch = useDispatch()
  const state = useTodoSelector()

  const changeHandler = (task: string) => {
    dispatch(taskModule.actions.inputTask(task))
  }

  const clickHandler = (task: string) => {
    dispatch(taskModule.actions.addTask(task))
  }

  return (
    <div>
      <input type="text" onChange={e => changeHandler(e.target.value)} />
      <input
        type="button"
        value="add"
        onClick={() => clickHandler(state.task)}
      />
      <ul>
        {state.tasks.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default TodoApp
