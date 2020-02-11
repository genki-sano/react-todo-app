import React from 'react'
import TextArea from '../Atoms/TextArea'
import Button from '../Atoms/Button'

const AddTask: React.FC = props => {
  return (
    <>
      <TextArea />
      <Button value="add" />
    </>
  )
}

export default AddTask
