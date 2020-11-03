
import React from 'react'
import { StyledCircle } from './style'
import PropTypes from 'prop-types'

const SingleCircle = ({ text }) => {
  return (
    <StyledCircle>{text}</StyledCircle>
  )
}
SingleCircle.propTypes = {
  text: PropTypes.string.isRequired
}
export default SingleCircle
