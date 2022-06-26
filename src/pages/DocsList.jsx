import {useState} from 'react'
import {Link} from 'react-router-dom'

import Card from '../components/Card'
import Select from '../UI/select/MySelect.jsx'

const DocsList = () => {


  const [grid, setGrid] = useState(true)

  const [docsItem, setDocsItem] = useState([
    {
      img: 'preview',
      id: 13,
      label: 'Регистры',
    },
    {
      img: 'preview',
      id: 14,
      label: 'Сегменты',
    },
    {
      img: 'preview',
      id: 15,
      label: 'Стек',
    },
    {
      img: 'preview',
      id: 16,
      label: 'Адресация',
    },
  ])

  return (
    <div className="container">
      <div className="d-flex jcb aic">
        <h2>Документация</h2>
        <Select grid={grid} setGrid={setGrid}/>
      </div>
      <div className="card-wrap">
        {
          grid
          ? docsItem.map(item =>
            <Card {...item} />
          )
          : <ul>{
              docsItem.map(({id, label}) =>
                <li><Link to={`/article/${id}`}>{label}</Link></li>
              )
            }</ul>
        }
      </div>
    </div>
  )
}

export default DocsList
