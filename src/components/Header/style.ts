import styled from 'styled-components'
import { cores } from '../../styles'

interface HeroProps {
  isHome?: boolean
}

export const Hero = styled.div<HeroProps>`
  width: 100%;
  height: ${props => (props.isHome ? '384px' : '186px')};
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-left: 46.7%;
  margin-top: 40px;
`

export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: 36px;
  letter-spacing: 0;
  text-align: center;
  margin-top: 140px;
  color: ${cores.vermelho};
`
