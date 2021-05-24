/* Dependencies */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

/* Components */
import Paragraph from '../Paragraph'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('Paragraph', () => {
  it('should render children inside a p tag', () => {
    const wrapper = shallow(<Paragraph>This is my first test</Paragraph>)
    const paragraph = wrapper.find('p')
    expect(paragraph).toHaveLength(1)
    expect(paragraph.text()).toEqual('This is my first test')
  })
})