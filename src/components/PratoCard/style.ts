import styled from 'styled-components'
import { cores } from '../../styles'

export const PratoCard = styled.div`
  background-color: ${cores.vermelho};
  position: relative;
  width: 320px;
`

export const PratoImg = styled.img`
  width: 304px;
  height: 167px;
  margin: 7px;
`

export const PratoTextArea = styled.div`
  margin: 0px 7px 7px 7px;
`

export const PratoTitle = styled.h4`
  font-weight: 900;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${cores.buttonText};
  margin-bottom: 10px;
`

export const PratoDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: ${cores.buttonText};
  margin-bottom: 30px;
`

export const PratoButtom = styled.button`
  width: 306px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${cores.vermelho};
  background-color: ${cores.buttonText};
  border: none;
  padding: 5px;
  position: absolute;
  bottom: 5px;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.73);
`

export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  max-width: 1024px;
  width: 100%;
  padding: 24px;
  z-index: 2;
  position: relative;
`

export const ModalCloseBtn = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  top: 5px;
  right: 5px;
`

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`

export const ModalContainerImg = styled.div`
  display: flex;
  width: 280px;
  height: 280px;
  overflow: hidden;
`

export const ModalContentImg = styled.img`
  width: 280px;
  height: 280px;
  transform: scale(1.5);
  transform-origin: center;
`

export const ModalContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h4 {
    color: #ffffff;
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
  }

  p {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0%;
  }
`

export const AddCartButton = styled.button`
  color: ${cores.vermelho};
  border: none;
  background-color: ${cores.buttonText};
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  width: max-content;
  padding: 4px 6px;
  cursor: pointer;
`
