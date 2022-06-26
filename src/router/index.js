import Admin from '../pages/Admin'
import Article from '../pages/Article'
import DocsList from '../pages/DocsList'
import LabsList from '../pages/LabsList'
import Main from '../pages/Main'
import Telegram from '../pages/Telegram'
import Video from '../pages/Video'


export const AdminRoute = [
  {path: '/', Component: Main},
  {path: '/documentation', Component: DocsList},
  {path: '/article/:docsID', Component: Article},
  {path: '/labs', Component: LabsList},
  {path: '/admin', Component: Admin},
  {path: '/video', Component: Video},
  {path: '/telegram', Component: Telegram},
]

export const UserRoute = [
  {path: '/', Component: Main},
  {path: '/documentation', Component: DocsList},
  {path: '/article/:docsID', Component: Article},
  {path: '/labs', Component: LabsList},
  {path: '/video', Component: Video},
  {path: '/telegram', Component: Telegram},
]
