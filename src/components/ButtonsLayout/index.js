
import React, { useState } from 'react'
import { StyledWrapper, StyledContainer, StyledButton } from './style'
import Text from '../Text'
import SingleCircle from './SingleCircle'
import AmountContainer from './AmountContainer'

const ButtonsLayout = () => {
  const [textFirst, setTextFirst] = useState('1/2')
  const [textSecond, setTextSecond] = useState('2X')
  const [displayAmount, setDisplay] = useState(true)
  const handleClick = () => {
    setTextFirst('LO 1.53X')
    setTextSecond('HI 1.52X')
    setDisplay(false)
  }
  return (
    <StyledWrapper>
      <Text
      text='START CARD'
      color='#483B3B'
      fontWeight='bold'
      size='20px'
      textAligment='center'
      />
      <StyledContainer>
        <SingleCircle text={textFirst} transform={!displayAmount}/>
        {displayAmount ? <AmountContainer /> : null}
        <SingleCircle text={textSecond} transform={!displayAmount}/>
      </StyledContainer>
      <StyledButton onClick={handleClick}>
        {displayAmount
          ? 'PLAY'
          : 'CASHOUT' }
      </StyledButton>
    </StyledWrapper>
  )
}

export default ButtonsLayout
