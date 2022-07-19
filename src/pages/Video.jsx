import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import CardWrap from '../components/CardWrap'
import Select from '../UI/select/MySelect'

const Video = () => {

  const { video } = useSelector(state => state.posts)

  const isPostsLoading = video.status === 'loading'

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
        <h2>Видео</h2>
        <Select data={selectData} index={selectIndex} setIndex={setSelectIndex}/>
      </div>
      <CardWrap posts={video} selectIndex={selectIndex}/>
    </div>
  )
}

export default Video
