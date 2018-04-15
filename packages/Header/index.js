import React from 'react'
import { array } from 'prop-types'

const Header = ({ items }) => {
  return (
    <nav>
      <p>This is the header</p>
      <ul>
        {items.map(item => <li>{item.label}</li>)}
      </ul>
    </nav>
  )
}

Header.propTypes = {
  entries: array
}

export default Header