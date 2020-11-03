
import React, { useState } from 'react'
import { StyledWrapper, StyledContainer, StyledButton } from './style'
import Text from '../Text'
import SingleCircle from './SingleCircle'
import AmountContainer from './AmountContainer'

const ButtonsLayout = () => {
  const [textFirst, setTextFirst] = useState('1/2')
  const [textSecond, setTextSecond] = useState('2X')
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setTextFirst('LO 1.53X')
    setTextSecond('HI 1.52X')
    setShow(false)
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
        <SingleCircle text={textFirst}/>
        {show ? <AmountContainer show={show}/> : null}
        <SingleCircle text={textSecond}/>
      </StyledContainer>
      <StyledButton onClick={handleClick}>
        PLAY
      </StyledButton>
    </StyledWrapper>
  )
}

export default ButtonsLayout
