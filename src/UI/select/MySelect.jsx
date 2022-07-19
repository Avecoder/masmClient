import classes from './MySelect.module.scss'

import {useState} from 'react'

const MySelect = ({data, index, setIndex}) => {

  return (
    <div className={classes.select}>
      {
        data.map((item, i) =>
          <span key={i} style={{margin: 0}}>
            <button className={i === index ? classes.active : ''}  onClick={() => setIndex(i)}>[{item}]</button>
            {
              (data.length - 1) === i ? '' : <span>/</span>
            }
          </span>
        )
      }
    </div>
  )
}

export default MySelect
