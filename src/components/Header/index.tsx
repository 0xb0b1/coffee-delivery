import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.svg'

import { Container, Info } from './styles'

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="" />

      <Info>
        <button type="button">
          <MapPin size={32} weight="fill" color="#8047F8" />
          <span>Porto Alegre, RS</span>
        </button>

        <button className="add-to-cart-btn" type="button">
          <ShoppingCart size={32} weight="fill" color="#C47F17" />
        </button>
      </Info>
    </Container>
  )
}

export default Header
