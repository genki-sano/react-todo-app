import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Done from '@material-ui/icons/Done'
import RadioButtonUncheckedSharp from '@material-ui/icons/RadioButtonUncheckedSharp'

interface CardProps {
  key: number
}

const TaskCard: React.FC<CardProps> = props => {
  return (
    <ListItem key={props.key} role={undefined} dense>
      <ListItemIcon>
        <FormControlLabel
          control={
            <Checkbox
              icon={<RadioButtonUncheckedSharp />}
              checkedIcon={<Done />}
              color="primary"
              disableRipple
            />
          }
          label={props.children}
        />
      </ListItemIcon>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TaskCard
