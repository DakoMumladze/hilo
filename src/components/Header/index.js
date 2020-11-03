
import React from 'react'
import { StyledHeader } from './style'
import Icon from '../Icon'
import Button from '../Button'
import Text from '../Text'

const Header = () => {
  return (
      <StyledHeader>
        <Text
          text='hilo'
          size='26px'
          color='#FFB000'
          fontWeight='bold'
        />
        <Text
          text='0.00000000 ฿'
          size='12px'
          color='#483B3B'
        />
        <Button>
          <Icon name='Plus'/>
        </Button>
      </StyledHeader>
  )
}

export default Header
