import { useState } from 'react'

import { Link } from 'react-router-dom'

import axios from '../axios'

import { useSelector } from 'react-redux'

const LabsList = () => {

  const { labs } = useSelector(state => state.posts)

  return (
    <div className="container">
      <h2>Лабораторные работы</h2>
      <div className="list">
        <ul>
          {
            labs.items.map(({_id, title, number}, i) =>
              <li><Link to={`/article/${_id}`}>[Лабораторная работа {i += 1}]</Link> - {title}.</li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default LabsList
