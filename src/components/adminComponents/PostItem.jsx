import {  useRef } from 'react'
import {  useDispatch } from 'react-redux'
import { fetchRemovePost } from '../../redux/slices/posts'
import editIcon from '../../assets/img/edit.svg'
import { Link } from 'react-router-dom'
import ButtonIcon from '../../UI/button-icon/ButtonIcon'

const PostItem = ({_id, title, }) => {
  const dispatch = useDispatch()

  const deleteRef = useRef()
  const redirect = useRef()


  const removePost = async id => {
    if (window.confirm('Ты действительно хочешь удалить пост?')) {
      dispatch(fetchRemovePost(id))
    }
  }

  return (
    <li className="d-flex jcb">
      <Link to={`/article/${_id}`}>{title}</Link>
      <div className="d-grid post-list__button">
        <ButtonIcon valueRef={redirect}><img src={editIcon} alt="icon"/></ButtonIcon>
        <ButtonIcon valueRef={deleteRef}>✕</ButtonIcon>
      </div>
      <button ref={deleteRef} onClick={() => removePost(_id)} hidden></button>
      <Link to={`/article/${_id}/edit`} ref={redirect} hidden></Link>
    </li>
  )
}

export default PostItem
