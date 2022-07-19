import './mainpage.scss'

import { useState } from 'react'

import MyButton from '../../UI/button/MyButton'
import CodeSection from '../CodeSection'
import Card from '../Card'

import { useSelector } from 'react-redux'

const VideoSection = (props) => {

  const { video } = useSelector(state => state.posts)


  return (
    <section className="bg-dark">
      <div className="d-grid video-section container">
        <div className="video-section__posts">
          {
            video.items.slice(0, 4).map((post, i) =>
              <Card {...post} key={i}/>
            )
          }
        </div>
        <div className="video-section__inf">
          <h2 className="c-green">Видео материалы</h2>
          <p>Если ненавидишь читать документацию и примеры, то видео уроки как раз для тебя.</p>
          <MyButton pathname={'/video'}>Перейти к видео</MyButton>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
