import {Link} from 'react-router-dom'



import {useState} from 'react'
import HeaderSection from '../components/mainPageComponent/HeaderSection'
import AllSections from '../components/mainPageComponent/AllSections'
import LearnSection from '../components/mainPageComponent/LearnSection'


const Main = () => {

  return (
    <div>
      <HeaderSection/>
      <AllSections/>
      <LearnSection/>
    </div>
  )
}

export default Main
