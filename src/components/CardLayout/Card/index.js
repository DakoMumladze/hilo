
import React from 'react'
import PropTypes from 'prop-types'
import { StyledCard } from './style'
import Icon from '../../Icon'

const Card = ({ title }) => {
  return (
      <StyledCard>
        <Icon name='Circle'/>
        {title}
        </StyledCard>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired
}
export default Card
