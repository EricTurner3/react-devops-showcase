
import React from 'react'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const List = ({ items }) => {
  if (items.length === 0)  {
    return <Paragraph>No items found!</Paragraph>
  }

  return (
    <ul className='list-group list-group-flush'>
        {items.map(list_item => (
            <Link
            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
            to={`/${list_item.id}`}
            key={list_item.id}
            >
            {list_item.item}
            </Link>
        ))}
    </ul>
  )
}

export default List