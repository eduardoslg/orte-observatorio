import { Outlet } from 'react-router-dom'

import { Flex } from '@siakit/layout'

import { Foooter } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <Outlet />

      <Flex padding={0} margin={0} className="container">
        <Foooter />
      </Flex>
    </LayoutContainer>
  )
}
