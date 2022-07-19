import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import CardWrap from '../components/CardWrap'
import Select from '../UI/select/MySelect'

const DocsList = () => {

  const { docs } = useSelector(state => state.posts)

  const isPostsLoading = docs.status === 'loading'

  const [selectIndex, setSelectIndex] = useState(0)

  const selectData = [
    'Grid',
    'List'
  ]


  if(isPostsLoading) {
    return 'Loading...'
  }

  return (
    <div className="container">
      <div className="d-flex jcb aic">
        <h2>Документация</h2>
        <Select data={selectData} index={selectIndex} setIndex={setSelectIndex}/>
      </div>
      <CardWrap posts={docs} selectIndex={selectIndex}/>
    </div>
  )
}

export default DocsList
