import './mainpage.scss'

import { useState } from 'react'

import MyButton from '../../UI/button/MyButton'
import CodeSection from '../CodeSection'
import Card from '../Card'

import { useSelector } from 'react-redux'

const DocsSection = (props) => {

  const { docs } = useSelector(state => state.posts)


  return (
    <section>
      <div className="d-grid docs-section container">
        <div className="docs-section__inf">
          <h2>Документация</h2>
          <p>Большая документация, состоящая более чем из 19 разделов. Прежде чем писать код, прочти ее хотя бы.</p>
          <MyButton pathname={'/documentation'}>Документация</MyButton>
        </div>
        <div className="docs-section__posts">
          {
            docs.items.slice(0, 4).map((post, i) =>
              <Card {...post} key={i}/>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default DocsSection
