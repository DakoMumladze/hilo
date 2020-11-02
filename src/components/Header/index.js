
import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, StyledTitle, StyledAmount, StyledButton } from './style'
import Icon from '../Icon'

const Header = ({ title, amount }) => {
  return (
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledAmount>{amount}฿</StyledAmount>
        <StyledButton>
          <Icon name='Plus'/>
        </StyledButton>
      </StyledHeader>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Header
