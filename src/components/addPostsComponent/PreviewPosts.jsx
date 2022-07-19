import ButtonIcon from '../../UI/button-icon/ButtonIcon'
import './addPost.scss'
import axios from '../../axios'
import { baseURL } from '../../utils'
import { useRef, useState } from 'react'
import patternImage from '../../assets/img/pattern.png'



const PreviewPosts = ({imageUrl, setImageUrl}) => {

  const inputFileRef = useRef()
  const imageRemoveRef = useRef()


  const handleChangeFile = async e => {
    try {


      const formData = new FormData()
      const file = e.target.files[0]


      formData.append('image', file)
      const { data } = await axios.post('/upload', formData)


      setImageUrl(baseURL + data.url)
    } catch(err) {
      console.warn(err)
      alert('Ошибка при загрузке файла!')
    }
  }

  const onClickRemoveImage = async () => {
    setImageUrl('')
  }

  const backgroundImage = imageUrl.length > 0 ? `url('${imageUrl}')` : `url(${patternImage})`


  return (
    <div className="preview-wrap" style={{backgroundImage}}>
      <input type="file" ref={inputFileRef} onChange={handleChangeFile} hidden/>
      <button ref={imageRemoveRef} onClick={onClickRemoveImage} hidden></button>
      {
        imageUrl.length > 0
        ? <ButtonIcon id="preview-btn" valueRef={imageRemoveRef}>✕</ButtonIcon>
        : <ButtonIcon id="preview-btn" valueRef={inputFileRef}>+</ButtonIcon>
      }
    </div>
  )
}

export default PreviewPosts
