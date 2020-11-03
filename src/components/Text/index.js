
import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './style'

const Text = ({ text, size, color, fontWeight, textAligment }) => {
  return (
    <StyledTitle
      size={size}
      color={color}
      fontWeight={fontWeight}
      textAligment={textAligment}
    >
      {text}
    </StyledTitle>

  )
}
Text.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  textAligment: PropTypes.string
}

export default Text
