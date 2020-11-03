import styled from 'styled-components'

export const StyledCards = styled.div`
  width: 192px;
  height: 295px;
  position: relative;
  margin: auto;
  &:before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #EAE6E2;
    border-radius: 22px;
    right: -20px;
    top: 4px;
    z-index: 1;
    transform: rotate(12deg);
    display: block;
  }
  &:after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #EAE6E2;
    border-radius: 22px;
    left: -22px;
    bottom: -6px;
    z-index: 0;
    transform: rotate(-4deg);
    display: block;
  }
`
