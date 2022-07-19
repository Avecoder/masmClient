import {Link} from 'react-router-dom'



import {useState} from 'react'
import HeaderSection from '../components/mainPageComponent/HeaderSection'
import LearnSection from '../components/mainPageComponent/LearnSection'
import DocsSection from '../components/mainPageComponent/DocsSection'
import VideoSection from '../components/mainPageComponent/VideoSection'
import LabsSection from '../components/mainPageComponent/LabsSection'


const Main = () => {

  return (
    <div>
      <HeaderSection/>
      <LearnSection/>
      <DocsSection/>
      <VideoSection/>
      <LabsSection/>

    </div>
  )
}

export default Main
