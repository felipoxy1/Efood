import { Link } from 'react-router-dom'
import { cores } from './../../styles'
import styled from 'styled-components'

interface HeroProps {
  isHome?: boolean
}

export const Hero = styled.div<HeroProps>`
  width: 100%;
  height: ${props => (props.isHome ? '384px' : '186px')};
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
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

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 60px 20px;
  ${Logo} {
    margin-top: 0;
  }

  button {
    background: none;
    border: none;
    color: ${cores.vermelho};
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    cursor: pointer;
  }
`

export const LinkTo = styled(Link)`
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${cores.vermelho};
  text-decoration: none;
`
