import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }

`

export const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(90deg, rgba(59,143,52,1) 0%, rgb(42 122 36) 50%, rgba(32,130,24,1) 100%);
  width: 280px;
  border-radius: 15px 15px 8px 8px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0px 0px 8px 0px black;
`

export const TreeImage = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 12px 12px 0 0;
`

export const TreeNameContainer = styled.div`
  /* background-color: #242429; */
  background: linear-gradient(190deg,rgba(36,36,41,1) 0%,#000000d1 100%);
  height: 50px;
  color: #F1F2F2;
  font-size: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  box-shadow: 0px 2px 4px 0px #000000c4;
`

export const TreeAttribute = styled.span`
  font-size: 14px;
  /* background-color: #F1F2F2;  */
  background: linear-gradient(90deg, rgba(241,242,242,1) 0%, rgba(219,219,219,1) 100%);
  border-radius: 8px;
  margin: 8px 20px;
  display: flex;
  justify-content: space-between;
  padding: 2px 10px 2px 40px;
  font-family: inherit;
  position: relative;
  box-shadow: 0px 0px 6px 1px #000000c4;
  align-items: center;
  height: 30px;

  svg {
    position: absolute;
    bottom: -5px;
    left: -10px;
    padding: 10px;
    background-color: #242429;
    fill: #F1F2F2;
    border-radius: 50%;
  }
`

export const TreeAttributeTitle = styled.span`
  font-weight: 600;
`

export const TreePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 20px 10px 20px;
`

export const TreePrice = styled.span`
  color: #F1F2F2;
  font-size: 26px;
  font-family: inherit;
  display: flex;
  align-items: center;
`

export const TreeButton = styled.button`
  border: none;
  background-color: #242429;
  color: white;
  font-size: 24px;
  height: 60px;
  cursor: pointer;
  transition: ease all .2s;
  font-family: inherit;
  border-radius: 10px;
  padding: 0 8px;

  :hover {
    transition: ease all .2s;
    background-color: #383B4C;
    animation: ${pulse} 1s linear infinite;
  }
`