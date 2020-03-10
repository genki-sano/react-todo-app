import React from 'react'
import { shallow } from 'enzyme'
import TaskList from 'components/TaskList'
import TaskItem from 'components/TaskItem'

describe('<TaskList />', () => {
  it('要素がない時に表示されない', () => {
    const wrapper = shallow(<TaskList tasks={[]} focus={false} />)
    expect(wrapper.find(TaskItem).exists()).toEqual(false)
  })
})
