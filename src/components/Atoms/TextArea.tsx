import React from 'react'
import { useDispatch } from 'react-redux'
import taskModule from '@/modules/taskModule'

const TextArea: React.FC = () => {
  const dispatch = useDispatch()

  const changeHandler = (task: string) => {
    dispatch(taskModule.actions.inputTask(task))
  }

  return <input type="text" onChange={e => changeHandler(e.target.value)} />
}

export default TextArea
