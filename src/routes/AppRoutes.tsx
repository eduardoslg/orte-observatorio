import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../_layouts/DefaultLayout'
import { History } from '../pages/History'
import { Home } from '../pages/Home'
import { WhoWeAre } from '../pages/WhoWeAre'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<History />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
      </Route>
    </Routes>
  )
}
