import classes from './Admin.module.scss'
import MyButton from '../../UI/button/MyButton'
import CategorySelect from '../../components/CategorySelect'
import PostList from '../../components/adminComponents/PostList'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSendLink, logout } from '../../redux/slices/auth'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'



const Admin = () => {
  const dispatch = useDispatch()
  const [cookie, setCookie, removeCookie] = useCookies(['token'])
  const isAuth = useSelector(state => Boolean(state.auth.data))

  const [email, setEmail] = useState('')
  const [category, setCategory] = useState(0)


  const onSubmit = async () => {
    if(email.trim().length !== 0) {
      dispatch(fetchSendLink(email))
      alert('Ссылка отправлена')
      setEmail('')
    }
  }


  const signOut = () => {
    if(window.confirm('Ты действительно хочешь выйти?')) {
      removeCookie('token')
      dispatch(logout())
    }
  }

  if(!isAuth) {
    return <Navigate to="/login"/>
  }

  return (
    <div className="container">
      <div className={classes.adminWrap}>
        <div>
          <h2>Админ панель</h2>
          <input value={email} className="input" onChange={e => setEmail(e.target.value)} placeholder="email"/>
          <button onClick={onSubmit} className="button-hooks mt20 mb20">[Добавить пользователя]</button>

          <div className={classes.adminButtons}>
            <MyButton pathname={'/add'}>Новая статья</MyButton>
            <span>или</span>
            <button className="button-hooks" onClick={signOut}>[Выйти]</button>
          </div>
        </div>
        <div>
          <CategorySelect setValue={setCategory}/>
          <PostList category={category} />
        </div>
      </div>
    </div>
  )
}

export default Admin
