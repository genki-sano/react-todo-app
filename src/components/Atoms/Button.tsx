import React from 'react'
import { useDispatch } from 'react-redux'
import taskModule, { useTodoSelector } from '@/modules/taskModule'

type ButtonProps = { value: string }

const Button: React.FC<ButtonProps> = props => {
  const dispatch = useDispatch()
  const state = useTodoSelector()

  const addTask = (task: string) => {
    dispatch(taskModule.actions.addTask(task))
  }

  return (
    <input
      type="button"
      value={props.value}
      onClick={() => addTask(state.task)}
    />
  )
}

export default Button
