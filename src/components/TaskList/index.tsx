import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import TaskCard from '@/components/TaskCard'
import { Color } from '@/constants/color'
import taskModule, { useTodoSelector } from '@/modules/taskModule'

const FromWarp = styled(Grid)`
  width: calc(100% - 24px);
  margin: 8px 12px;
`

const ListWarp = styled(Paper)`
  background-color: ${Color.gray.subtlest};
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
`

const KEY_ENTER = 13

const TaskList: React.FC = () => {
  const dispatch = useDispatch()
  const state = useTodoSelector()

  const addTask = (task: string) => {
    dispatch(taskModule.actions.addTask(task))
  }

  return (
    <ListWarp>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<ListSubheader component="div">Todo</ListSubheader>}
      >
        <FromWarp container spacing={0}>
          <TextField
            fullWidth
            onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
              const input = e.target as HTMLInputElement
              if (e.keyCode === KEY_ENTER && input.value !== '') {
                addTask(input.value)
                input.value = ''
              }
            }}
          />
        </FromWarp>
        {state.tasks.map(task => {
          return <TaskCard key={task.id}>{task.text}</TaskCard>
        })}
      </List>
    </ListWarp>
  )
}

export default TaskList
