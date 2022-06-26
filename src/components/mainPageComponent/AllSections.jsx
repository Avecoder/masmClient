import './mainpage.scss'

import {useState} from 'react'
import {Link} from 'react-router-dom'

const AllSections = (props) => {

  const [allSect, setAllSect] = useState([
    {
      icon: 'docs',
      link: '/documentation',
      label: '[Документация]',
      text: 'Большая документация, состоящая более чем из 19 разделов. Прежде чем писать код, прочти ее хотя бы.'
    },
    {
      icon: 'example',
      link: '/labs',
      label: '[Примеры]',
      text: 'Разбор каждой лабораторных работы, чтобы тебе было легче понять, как работает ассемблер.'
    },
    {
      icon: 'video',
      link: '/video',
      label: '[Видео материалы]',
      text: 'Если ненавидишь читать документацию и примеры, то видео уроки как раз для тебя.'
    },
    {
      icon: 'telegram',
      link: '/telegram',
      label: '[Telegram]',
      text: 'Если нет времени и сил разбираться лабами по МЗЯПу, то переходи в телеграм.'
    },
  ])

  return (
    <section>
      <div className="container">
        <h2>Основные разделы</h2>
        <div className="d-flex jcb">
          {
            allSect.map(({icon, link, label, text}) =>
              <div className="section-item">
                <img src={`../src/assets/img/${icon}.svg`} alt={icon}/>
                <Link to={link}>{label}</Link>
                <p>{text}</p>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default AllSections
