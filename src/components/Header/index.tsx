import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { Flex } from '@siakit/layout'

import logo from '../../../public/ORTE-LOGO.webp'
import { Container, HeaderContainer } from './styles'
export function Header() {
  const navigate = useNavigate()

  const location = useLocation()

  const home = location.pathname === '/'
  const about = location.pathname === '/about'
  const whoweare = location.pathname === '/whoweare'

  return (
    <>
      <HeaderContainer>
        <Flex align="center" justify="center" className="container">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>

          {/* <HeaderButtonsContainer>
            <HeaderButton variant="amber300">
              <MapPin size={20} weight="fill" />
              Olimpia, SP
            </HeaderButton>
          </HeaderButtonsContainer> */}

          <Flex className="container" flex gap={8}>
            <Container
              flex
              css={{ backgroundColor: home ? '#fde68a' : '' }}
              onClick={() => navigate('/')}
            >
              Home
            </Container>

            <Container
              flex
              css={{ backgroundColor: about ? '#fde68a' : '' }}
              onClick={() => navigate('/about')}
            >
              História
            </Container>

            <Container
              flex
              css={{ backgroundColor: whoweare ? '#fde68a' : '' }}
              onClick={() => navigate('/whoweare')}
            >
              Quem somos
            </Container>

            <Container flex>Boletins</Container>

            <Container flex>Contato</Container>
          </Flex>
        </Flex>
      </HeaderContainer>
    </>
  )
}
