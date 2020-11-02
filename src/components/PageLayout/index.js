
import React from 'react'
import { StyledContent } from './style'
import Header from '../Header/index'
import CardLayout from '../CardLayout/index'

const PageLayout = () => {
  return (
      <StyledContent>
        <Header title='hilo' amount='0.00000000'/>
        <CardLayout />
        </StyledContent>
  )
}

export default PageLayout
