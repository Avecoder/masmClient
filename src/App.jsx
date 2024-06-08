import AppRouter from './components/AppRouter'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import ServerError from './components/ServerError'
import {BrowserRouter} from 'react-router-dom'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchDocsPosts,
  fetchLabsPosts,
  fetchVideoPosts
} from './redux/slices/posts'
import { fetchGetMe } from './redux/slices/auth'

import './styles/main.scss'

function App() {
  const dispatch = useDispatch()
  const { docs, labs, video} = useSelector(state => state.posts)

  useEffect(() => {
    alert(window.location.href)
    dispatch(fetchGetMe())
    dispatch(fetchDocsPosts())
    dispatch(fetchLabsPosts())
    dispatch(fetchVideoPosts())
  }, [])

  const loading = docs.status === 'loading' && video.status === 'loading' && labs.status === 'loading'
  const error = docs.status === 'error'

  if(loading) {
    return <Loading/>
  }

  if(error) {
    return <ServerError/>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <AppRouter></AppRouter>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
