import { NavLink } from 'react-router-dom'

import { MapPin } from 'phosphor-react'

import { Flex } from '@siakit/layout'

import logo from '../../../public/ORTE-LOGO.webp'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <Flex className="container">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Olimpia, SP
          </HeaderButton>
        </HeaderButtonsContainer>
      </Flex>
    </HeaderContainer>
  )
}
