import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

const Warp = styled(Card)`
  margin: 8px 8px 0;
  display: flex;
`

const Content = styled(CardContent)`
  flex-direction: column;
  padding: 6px 16px;
  &:last-child {
    padding-bottom: 6px;
  }
`

const Button = styled(IconButton)`
  padding: 0 6px;
`

interface CardProps {
  key: number
}

const TaskCard: React.FC<CardProps> = props => {
  return (
    <Warp>
      <Content key={props.key}>
        <Typography color="inherit">{props.children}</Typography>
      </Content>
      <Button aria-label="delete">
        <DeleteIcon />
      </Button>
    </Warp>
  )
}

export default TaskCard
