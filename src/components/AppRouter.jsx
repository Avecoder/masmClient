import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import { useState } from 'react'

import { routes } from '../router'

const AppRouter = () => {


  return (
    <Routes>
      {routes.map(({path, Component}, i) =>
        <Route path={path} element={<Component/>} key={i}></Route>
      )}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter
