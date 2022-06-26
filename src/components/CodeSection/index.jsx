import './codeSection.scss'

import {useState} from 'react'

const CodeSection = (props) => {

  const [data, setData] = useState([
    '.code',
    '.startup',
    '-',
    'lea dx,prompt',
    '	mov ah,09h',
    'int 21h',
    '-',
    'lea dx,n1',
    'mov ah,09h',
    'int 21h',
    '-',
  ])



  return (
    <div className="code bg-dark">
      {
        data.map(item =>
          item.trim() === '-' ? <div className="separator"></div> : <p>{item}</p>
        )
      }
    </div>
  )
}

export default CodeSection
