
import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, StyledTitle, StyledAmount } from './style'
import Icon from '../Icon'
import Button from '../Button'

const Header = ({ title, amount }) => {
  return (
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledAmount>{amount}฿</StyledAmount>
        <Button>
          <Icon name='Plus'/>
        </Button>
      </StyledHeader>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Header
