import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import './admin.scss'
import PostItem from './PostItem'


const PostList = ({category}) => {

  const { docs, labs, video } = useSelector(state => state.posts)

  const posts = useMemo(() => {
    switch(category) {
      case 'docs':
        return docs.items
      case 'labs':
        return labs.items
      case 'video':
        return video.items
    }
  }, [category, docs, labs, video])



  return (
    <div className="post-list">
      <ul>
        {
          posts && posts.map((item, i) =>
            <PostItem {...item} key={i}/>
          )
        }
      </ul>
    </div>
  )
}

export default PostList
