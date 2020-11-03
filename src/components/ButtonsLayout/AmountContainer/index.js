
import React from 'react'
import { StyledCircleText } from './style'
import Text from '../../Text'

const Amount = () => {
  return (
   <StyledCircleText>
      <Text
        text='0.00000000 ฿'
        color='#FFB000'
        size='12px'
        textAligment='center'
      />
    </StyledCircleText>
  )
}
export default Amount
