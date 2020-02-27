import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import List from '@material-ui/core/List'
import TaskItem from 'components/TaskItem'
import { Theme } from 'constants/theme'
import taskModule, { useTodoSelector } from 'modules/taskModule'

const KEY_ENTER = 13

const FromWarp = styled(Paper)`
  padding-top: ${Theme.spacing(2)}px;
  padding-right: ${Theme.spacing(4)}px;
  padding-bottom: ${Theme.spacing(2)}px;
  padding-left: ${Theme.spacing(12)}px;
`

const TaskList: React.FC = () => {
  const dispatch = useDispatch()
  const state = useTodoSelector()

  const addTask = (task: string) => {
    dispatch(taskModule.actions.addTask(task))
  }

  return (
    <>
      <FromWarp>
        <InputBase
          fullWidth
          placeholder="What needs to be done?"
          onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
            const input = e.target as HTMLInputElement
            if (e.keyCode === KEY_ENTER && input.value !== '') {
              addTask(input.value)
              input.value = ''
            }
          }}
        />
      </FromWarp>
      {state.tasks.length > 0 && (
        <List>
          {state.tasks.map(task => {
            return <TaskItem key={task.id}>{task.text}</TaskItem>
          })}
        </List>
      )}
    </>
  )
}

export default TaskList
