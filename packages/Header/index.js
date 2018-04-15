import React from 'react'
import { array } from 'prop-types'

const Header = ({items}) => {
  return (
    <ul>
      {items.map(item => <li>{item.label}</li>)}
    </ul>
  )
}

Header.propTypes = {
  entries: array
}

export default Header