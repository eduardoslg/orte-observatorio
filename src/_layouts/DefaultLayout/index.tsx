import { Outlet } from 'react-router-dom'

import { Foooter } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <LayoutContainer>
        <Header />

        <Outlet />

        <Foooter />
      </LayoutContainer>
    </>
  )
}
