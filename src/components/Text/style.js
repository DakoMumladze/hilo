import styled from 'styled-components'

export const StyledTitle = styled.p.attrs(props => ({
  size: props.size,
  fontWeight: props.fontWeight || 'normal',
  color: props.color,
  textAligment: props.textAligment
}))`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.textAligment};
  text-transform: uppercase;
  margin: 0;
`
