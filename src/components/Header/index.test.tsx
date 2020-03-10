import React from 'react'
import { shallow } from 'enzyme'
import Header from 'components/Header'

describe('<Header />', () => {
  it('ヘッダーの文言が"TodoApp"である', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.text()).toEqual('TodoApp')
  })
})
