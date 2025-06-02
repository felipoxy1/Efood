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
  width: 310px;
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
`
