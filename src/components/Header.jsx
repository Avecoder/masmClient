import {Link, useLocation} from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { githubUrl } from '../utils'

import adminIconDark from '../assets/img/admin-dark.svg'
import adminIcon from '../assets/img/admin.svg'
import githubIconDark from '../assets/img/github-dark.svg'
import githubIcon from '../assets/img/github.svg'


const getWindowSize = () => {
  return window.innerWidth
}


const Header = (props) => {

  let {pathname} = useLocation()


  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])


  return (
    <div className="header d-flex jcb aic container">
      <Link to="/">SUT</Link>
      <div className="d-flex">
        <Link to="/admin" style={{marginRight: '20px'}}>
          <img src={(pathname == '/' && windowSize > 899) ? adminIcon : adminIconDark } alt=""/>
        </Link>
        <a href={githubUrl} className="icon" target={"_blank"}>
          <img src={(pathname == '/' && windowSize > 899) ? githubIcon : githubIconDark} alt=""/>
        </a>
      </div>
    </div>
  )
}

export default Header
