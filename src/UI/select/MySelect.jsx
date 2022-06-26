import classes from './MySelect.module.scss'

import {useState} from 'react'

const MySelect = ({grid, setGrid}) => {

  return (
    <div className={classes.select}>
      <button
        class={grid ? classes.active : ''}
        onClick={() => setGrid(true)}
      >[Grid]</button>
      /
      <button
        class={grid ? '' : classes.active}
        onClick={() => setGrid(false)}
      >[List]</button>
    </div>
  )
}

export default MySelect
