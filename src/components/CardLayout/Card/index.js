
import React from 'react'
import PropTypes from 'prop-types'
import { StyledCard, StyledText } from './style'
import Icon from '../../Icon'
import Button from '../../Button'

const Card = ({ title }) => {
  return (
      <StyledCard>
        <Button>
          <Icon name='Circle'/>
        </Button>
        <StyledText>
          <span>{title}</span>
          <Icon name='Heart'/>
        </StyledText>
        </StyledCard>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired
}
export default Card
