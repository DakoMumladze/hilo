import styled from 'styled-components'

export const StyledCircle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #FFB000;
  color: #DB4646;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  ${props => props.transform && ({
    width: '136px',
    borderRadius: '28px'
 })
  }
`
