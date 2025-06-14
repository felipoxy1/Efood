import * as S from './style'
import heroImg from '../../assets/Background.svg'
import LogoImg from '../../assets/Logo.svg'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

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
            <button onClick={openCart}>
              {items.length} produto(s) no carrinho
            </button>
          </S.HeaderNav>
        </>
      )}
    </S.Hero>
  )
}

export default Header
