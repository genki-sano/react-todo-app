import React from 'react'
import TextArea from '@/components/Atoms/TextArea'
import Button from '@/components/Atoms/Button'

const AddTask: React.FC = props => {
  return (
    <>
      <TextArea />
      <Button value="add" />
    </>
  )
}

export default AddTask
