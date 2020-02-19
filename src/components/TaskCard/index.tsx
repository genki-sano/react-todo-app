import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

const Warp = styled(Card)`
  margin: 8px 8px 0;
  position: relative;
`

const Content = styled(CardContent)`
  flex-direction: column;
  padding: 6px 16px;
  &:last-child {
    padding-bottom: 6px;
  }
`

const Button = styled(IconButton)`
  opacity: 0.8;
  padding: 4px;
  margin: 2px;
  position: absolute;
  right: 4px;
  top: 0;
  z-index: 40;
  &:hover {
    opacity: 1;
  }
`

const Text = styled(Typography)`
  word-wrap: break-word;
  white-space: initial;
`

interface CardProps {
  key: number
}

const TaskCard: React.FC<CardProps> = props => {
  return (
    <Warp>
      <Content key={props.key}>
        <Text color="inherit">{props.children}</Text>
      </Content>
      <Button aria-label="delete">
        <DeleteIcon />
      </Button>
    </Warp>
  )
}

export default TaskCard
