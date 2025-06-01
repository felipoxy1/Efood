import * as S from './style'
import heroImg from '../../assets/Background.svg'
import LogoImg from '../../assets/Logo.svg'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <S.Hero isHome={isHome} style={{ backgroundImage: `url(${heroImg})` }}>
      {isHome ? (
        <>
          <S.Logo src={LogoImg} alt="Logo" />
          <S.PageTitle>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </S.PageTitle>
        </>
      ) : (
        <>
          <S.HeaderNav>
            <S.LinkTo to="/">Restaurantes</S.LinkTo>
            <S.Logo src={LogoImg} alt="Logo" />
            <button>0 produto(s) no carrinho</button>
          </S.HeaderNav>
        </>
      )}
    </S.Hero>
  )
}

export default Header
