import CategorySelect from '../../components/CategorySelect'
import 'easymde/dist/easymde.min.css'
import classes from './AddPost.module.scss'
import { useState, useCallback, useMemo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor'
import axios from '../../axios'
import MySelect from '../../UI/select/MySelect'
import PreviewPosts from '../../components/addPostsComponent/PreviewPosts'


const AddPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isAuth = useSelector(state => Boolean(state.auth.data))
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [selectIndex, setSelectIndex] = useState(0)


  const onChange = useCallback((value) => {
    setText(value);
  }, [])

  const selectData = [
    'labs',
    'docs',
    'video'
  ]

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "200px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  )

  const fields = {
    title,
    imageURL: imageUrl,
    category: selectData[selectIndex],
    text
  }

  const onSubmit = async () => {
    try {

      const { data } = await axios.post('/posts', fields)
      const id = data._id
      navigate(`/article/${id}`)
    } catch (err) {
      alert('Ошибка публикации поста!')
    }
  }


  const onEdit = async () => {
    try {

      const { data } = await axios.patch(`/posts/${id}`, fields)

      alert('Пост успешно обновлен')
      navigate(`/article/${id}`)
    } catch(err) {
      console.log(err)
      alert('Ошибка при обновлении поста!')
    }
  }

  useEffect(() => {
    if(id) {
      axios.get(`/post/${id}`).then(({data}) => {
        const {text, title, imageURL, category } = data

        setText(text)
        setTitle(title)
        setImageUrl(imageURL)
        setSelectIndex(selectData.findIndex(item => item === category))
      }).catch(console.log)
    }
  }, [])


  if(!isAuth) {
    return <Navigate to="/" />
  }



  return (
    <div className="container">
      <h2>Добавить пост</h2>
      <div className={classes.addPost}>
        <div className="add-post__main">
          <input placeholder="Заголовок" className="input" value={title} onChange={e => setTitle(e.target.value)}/>

          <PreviewPosts imageUrl={imageUrl} setImageUrl={setImageUrl}/>

          <MySelect data={selectData} index={selectIndex} setIndex={setSelectIndex}/>

        </div>

        <div className="add-post__text jce d-flex" style={{flexDirection: 'column', alignItems: 'flex-end'}}>
          <SimpleMDE
            value={text}
            onChange={onChange}
            options={options}
            className={classes.editor}
          />

        {
          id
          ? <button onClick={onEdit} className="button-hooks mt20">[Обновить пост]</button>
          : <button onClick={onSubmit} className="button-hooks mt20">[Добавить пост]</button>
        }
        </div>
      </div>

    </div>
  )
}

export default AddPost
