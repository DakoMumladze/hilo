import styled from 'styled-components'

export const StyledCard = styled.div`
  width: 192px;
  height: 295px;
  background-color: #EAE6E2;
  border-radius: 22px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  padding: 18px 20px;
  position: relative;
  z-index: 1;
  &:before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #EAE6E2;
    border-radius: 22px;
    right: -20px;
    top: 0;
    z-index: -1;
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
    left: -20px;
    bottom: 0;
    z-index: -1;
    transform: rotate(-4deg);
    display: block;
  }
`
export const StyledText = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  > span {
    font-size: 100px;
    color: #DB4646;
    margin-bottom: 10px;
    line-height: 150%;
  }
`
