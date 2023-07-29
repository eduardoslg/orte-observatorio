import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../_layouts/DefaultLayout'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
