/* Dependencies */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

/* Components */
import List from '../List'
import Paragraph from '../Paragraph'

Enzyme.configure({ adapter: new Adapter() }) // Configure Enzyme

describe('List', () => {
  it('should render `No items found!` inside a Paragraph component if items is an empty array', () => {
    const wrapper = shallow(<List items={[]} />)
    const paragraph = wrapper.find(Paragraph)
    expect(paragraph.props().children).toEqual('No items found!')
  })

  it('should render a list with the `item` of each object inside of an <ul>', () => {
    const itemsArray = [{ id: 1, item: 'Chocolate' }, { id: 2, item: 'Dog Treats' }, { id: 3, item: 'Strawberries' }]
    const wrapper = shallow(<List items={itemsArray} />)
    //console.log(wrapper.debug()); // print out the component to console
    const items = wrapper.find('.list-group-item')
    expect(items).toHaveLength(itemsArray.length)
    expect(items.first().text()).toEqual('Chocolate')
  })
})