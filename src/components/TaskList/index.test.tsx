import React from 'react'
import { shallow } from 'enzyme'
import TaskList from 'components/TaskList'
import TaskItem from 'components/TaskItem'
import { Task } from 'types/todos'

describe('<TaskList />', () => {
  it('要素がない時に表示されない', () => {
    const wrapper = shallow(<TaskList tasks={[]} focus={false} />)
    expect(wrapper.find(TaskItem).exists()).toEqual(false)
  })
  it('要素がある時に表示される', () => {
    const task: Task = { id: 0, text: 'テストを学ぶ', completed: false }
    const wrapper = shallow(<TaskList tasks={[task]} focus={false} />)
    expect(wrapper.find(TaskItem).exists()).toEqual(true)
  })
})
