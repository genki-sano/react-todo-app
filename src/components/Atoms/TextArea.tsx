import React from 'react'
import { useDispatch } from 'react-redux'
import taskModule from '@/modules/taskModule'

const TextArea: React.FC = () => {
  const dispatch = useDispatch()

  const inputTask = (task: string) => {
    dispatch(taskModule.actions.inputTask(task))
  }

  return <input type="text" onChange={e => inputTask(e.target.value)} />
}

export default TextArea
