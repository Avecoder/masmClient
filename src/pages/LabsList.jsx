import {useState} from 'react'

import {Link} from 'react-router-dom'

const LabsList = () => {

  const [labsList, useLabsList] = useState([
    {
      id: 1,
      label: 'Вычисление целочисленных арифметических выражений',
      number: 1
    },
    {
      id: 2,
      label: 'Вычисление целочисленных арифметических выражений',
      number: 2
    },
    {
      id: 3,
      label: 'Вычисление целочисленных арифметических выражений',
      number: 3
    },
    {
      id: 4,
      label: 'Вычисление целочисленных арифметических выражений',
      number: 4
    },
  ])

  return (
    <div className="container">
      <h2>Лабораторные работы</h2>
      <div className="list">
        <ul>
          {
            labsList.map(({id, label, number}) =>
              <li><Link to={`/article/${id}`}>[Лабораторная работа {number}]</Link> - {label}.</li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default LabsList
