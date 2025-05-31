import { Hero, Logo, PageTitle } from './style'
import heroImg from '../../assets/Background.svg'
import LogoImg from '../../assets/logo.svg'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <Hero isHome={isHome} style={{ backgroundImage: `url(${heroImg})` }}>
      <Logo src={LogoImg} alt="Logo" />
      {isHome && (
        <>
          <PageTitle>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </PageTitle>
        </>
      )}
    </Hero>
  )
}

export default Header
