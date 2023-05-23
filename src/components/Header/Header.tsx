import { TfiTimer } from 'react-icons/tfi'
import { FaScroll } from 'react-icons/fa'
import { HeaderContainer } from './styles'

import LogoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer" aria-label="link timer">
          <TfiTimer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico" aria-label="history">
          <FaScroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
