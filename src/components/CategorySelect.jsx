import MySelect from '../UI/select/MySelect'
import { useState, useEffect } from 'react'

const CategorySelect = ({setValue}) => {


  const selectData = [
    'labs',
    'docs',
    'video'
  ]

  const [selectIndex, setSelectIndex] = useState(0)


  useEffect(() => {
    setValue(selectData[selectIndex])
  }, [selectIndex])


  return (
    <MySelect data={selectData} index={selectIndex} setIndex={setSelectIndex}/>
  )
}

export default CategorySelect
