
import classes from './MyButton.module.scss'

import {useNavigate } from 'react-router-dom'

const MyButton = ({children, pathname}) => {
  console.log(pathname)
  const navigate = useNavigate()

  return (
    <div className={classes.buttonWrap}>
      <button onClick={() => navigate(pathname)}>{children}</button>
    </div>
  )
}

export default MyButton
