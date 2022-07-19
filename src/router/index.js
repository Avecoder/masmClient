import Admin from '../pages/Admin'
import Article from '../pages/Article'
import DocsList from '../pages/DocsList'
import LabsList from '../pages/LabsList'
import Main from '../pages/Main'
import Telegram from '../pages/Telegram'
import Video from '../pages/Video'
import AddPost from '../pages/AddPost'
import Login from '../pages/Login'
import Register from '../pages/Register'


export const routes = [
  {path: '/', Component: Main},
  {path: '/documentation', Component: DocsList},
  {path: '/article/:id', Component: Article},
  {path: '/article/:id/edit', Component: AddPost},
  {path: '/labs', Component: LabsList},
  {path: '/admin', Component: Admin},
  {path: '/video', Component: Video},
  {path: '/telegram', Component: Telegram},
  {path: '/registration', Component: Register},
  {path: '/login', Component: Login},
  {path: '/add', Component: AddPost},
]
