
import React from 'react'
import { StyledContent } from './style'
import Header from '../Header/index'
import Card from '../Card/index'

const PageLayout = () => {
  return (
      <StyledContent>
        <Header title='hilo' amount='0.00000000'/>
        <Card />
        </StyledContent>
  )
}

export default PageLayout
