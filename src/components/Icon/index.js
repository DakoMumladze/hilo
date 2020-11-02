import React from 'react'
import PropTypes from 'prop-types'

const Icon = (
  {
    name,
    children
  }
) => {
  const ComponentToRender = require(`../Icon/${name}`).default

  return (
    <div>
      {ComponentToRender({ children })}
    </div>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node
}
export default Icon
