import {Link, useLocation} from 'react-router-dom'



const Header = (props) => {

  let {pathname} = useLocation()

  return (
    <div className="header d-flex jcb aic container">
      <Link to="/">SUT</Link>
      <a href="https://github.com/Avecoder" className="icon" target={"_blank"}>
        <img src={pathname == '/' ? '../src/assets/img/github.svg' : '../src/assets/img/github-dark.svg'} alt=""/>
      </a>
    </div>
  )
}

export default Header
