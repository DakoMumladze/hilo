
import React from 'react'
import { StyledContent } from './style'
import Header from '../Header'
import CardLayout from '../CardLayout'
import ButtonsLayout from '../ButtonsLayout'

const PageLayout = () => {
  return (
      <StyledContent>
        <Header />
        <CardLayout />
        <ButtonsLayout />
      </StyledContent>
  )
}

export default PageLayout
