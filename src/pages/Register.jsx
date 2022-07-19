import { Navigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCheckLink, fetchAuthRegiser } from '../redux/slices/auth'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import Loading from '../components/Loading'


const Register = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => Boolean(state.auth.data))
  const status = useSelector(state => state.auth.status)
  const [cookies, setCookie] = useCookies(['token'])
  const [email, setEmail] = useState('')
  const [searchParams] = useSearchParams()
  const authToken = searchParams.get('auth_token')


  const getTokenPayload = async () => {
    const { payload } = await dispatch(fetchCheckLink(authToken))
    setEmail(payload.email)
  }

  useEffect(() => {
    getTokenPayload()
  }, [])


  const isErrorToken = status === 'error'
  const isLoading = status === 'loading'

  const onSubmit = async values => {
    const { payload } = await dispatch(fetchAuthRegiser({email, ...values}))

    if(!payload) return alert('Не удалось авторизоваться')

    if('token' in payload) setCookie('token', payload.token, {
      path: '/',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
    })
  }



  if(isLoading) {
    return <Loading/>
  }

  if(isAuth) {
    return <Navigate to="/admin"/>
  }

  console.log(isErrorToken)

  if(isErrorToken) {
    return <Navigate to="/"/>
  }



  return (
    <div className="container">
      <div className="d-flex jcc" >
        <div className="form-container">
          <h2>Регистрация</h2>
          <RegisterForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}

export default Register
