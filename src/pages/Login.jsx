import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthLogin } from '../redux/slices/auth'
import { useCookies } from 'react-cookie'
import LoginForm from '../components/LoginForm'


const Login = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => Boolean(state.auth.data))

  const [cookies, setCookie] = useCookies(['token'])




  const onSubmit = async values => {
    const { payload } = await dispatch(fetchAuthLogin(values))

    if(!payload) return alert('Не удалось авторизоваться')

    if('token' in payload) setCookie('token', payload.token, {
      path: '/',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
    })
  }

  if(isAuth) {
    return <Navigate to="/admin"/>
  }

  return (
    <div className="container">
      <div className="d-flex jcc" >
        <div className="form-container">
          <h2>Вход в аккаунт</h2>
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}

export default Login
