
import React from 'react'
import { StyledCircle } from './style'
import PropTypes from 'prop-types'

const SingleCircle = ({ text, transform }) => {
  return (
    <StyledCircle transform={transform}>{text}</StyledCircle>
  )
}
SingleCircle.propTypes = {
  text: PropTypes.string.isRequired,
  transform: PropTypes.bool.isRequired
}
export default SingleCircle
