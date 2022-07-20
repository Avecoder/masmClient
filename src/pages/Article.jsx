import MyTable from '../UI/table/MyTable'
import CodeSection from '../components/CodeSection'
import Loading from '../components/Loading'
import { useState, useEffect, useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from '../axios'
import ReactPlayer  from 'react-player'
import gfm from 'remark-gfm'

const Article = () => {

  const { id } = useParams()

  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [indexSubtitle, setIndexSubtitle] = useState(0)

  const articleRef = useRef()

  const anchor = useMemo(() => {
    return articleRef.current && Array.from(articleRef.current.getElementsByTagName('h2')).map(el => {
      return {el, text: el.innerText}
    })
  }, [articleRef.current])


  useEffect(() => {

    setIsLoading(true)

    axios
      .get(`/post/${id}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        alert('Ошибка при получении статьи')
      })
      .finally(() => {
        setIsLoading(false)
      })


  }, [])


  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }

  const scrollElement = (el, i) => {
    el.scrollIntoView({block: 'start', behavior: 'smooth'})
    setIndexSubtitle(i)
  }

  if(isLoading) {
    return <Loading />
  }

  return (
    <div className="container">
      <h2>{data.title}</h2>
      <div className="article" ref={articleRef}>
        {
          data.category === 'video'
          ? <div>
              <ReactPlayer controls={true} url={data.text} />
              <p className="mt20">Обязательно перейдите и подпишитесь на канал!</p>
            </div>
          : <ReactMarkdown remarkPlugins={[gfm]} children={data.text}/>
        }
      </div>
      <div className="anchor-wrap">
        <div className="anchor">
          <ul>
            {
              anchor && anchor.map((item, i) =>
                <li key={i} className={i === indexSubtitle ? 'active' : ''} onClick={() => scrollElement(item.el, i)}>[{item.text}]</li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Article
