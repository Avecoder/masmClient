import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import {useState} from 'react'

import {UserRoute, AdminRoute} from '../router'

const AppRouter = () => {

  const [isAdmin, setIsAdmin] = useState(false)

  return (
    isAdmin
      ? <Routes>
          {AdminRoute.map(({path, Component}, i) =>
            <Route path={path} element={<Component/>} key={i}></Route>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      : <Routes>
          {UserRoute.map(({path, Component}, i) =>
            <Route path={path} element={<Component/>} key={i}></Route>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
  )
}

export default AppRouter
