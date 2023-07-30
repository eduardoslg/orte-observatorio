import { Outlet } from 'react-router-dom'

import { Flex } from '@siakit/layout'

import { Foooter } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <LayoutContainer>
        <Header />

        <Outlet />
      </LayoutContainer>

      <Flex
        width="100%"
        maxWidth="1100px"
        padding="0px 12px 0px"
        css={{ marginLeft: '$auto', marginRight: 'auto' }}
      >
        <Foooter />
      </Flex>
    </>
  )
}
