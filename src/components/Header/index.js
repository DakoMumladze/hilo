
import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, StyledTitle, StyledAmount, StyledButton } from './style'

const Header = ({ title, amount }) => {
  return (
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledAmount>{amount}฿</StyledAmount>
        <StyledButton>+</StyledButton>
      </StyledHeader>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Header
