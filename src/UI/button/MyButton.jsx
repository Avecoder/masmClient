
import './MyButton.scss'

import {useNavigate } from 'react-router-dom'

const MyButton = ({children, pathname, dark}) => {
  const navigate = useNavigate()

  return (
    <div className="buttonWrap">
      <button onClick={() => pathname && navigate(pathname)}>{children}</button>
    </div>
  )
}

export default MyButton
