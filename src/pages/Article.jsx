
import MyTable from '../UI/table/MyTable'
import CodeSection from '../components/CodeSection'

import {useState} from 'react'


const Article = () => {

  const [tableData, setTableData] = useState([
    ['AH', 'AL'],
    ['BH', 'BL'],
    ['CH', 'CL'],
    ['DH', 'DL'],
  ])

  const [tableLabels, setTableLabels] = useState([
    ['15  8', '7  0'],
    ['AX', 'BX', 'CX', 'DX']
  ])

  return (
    <div className="container">
      <div className="article">
        <h2>Регистры</h2>
        <p>Для того, чтобы писать программы на ассемблере, нам необходимо знать, какие регистры процессора существуют и как их можно использовать. Все процессоры архитектуры x86 (даже многоядерные, большие и сложные) являются дальними потомками древнего Intel 8086 и совместимы с его архитектурой. Это значит, что программы на ассемблере 8086 будут работать и на всех современных процессорах x86.</p>
        <p>Все внутренние регистры процессора Intel 8086 являются 16-битными.</p>
        <p>Процессор Intel 8086 имеет 14 шестнадцатиразрядных регистров, которые используются для управления исполнением команд, адресации и выполнения арифметических операций.</p>

        <MyTable data={tableData} labels={tableLabels}></MyTable>

        <h2>Индексные регистры</h2>

        <ul>
          <li>АХ состоит из АН (старшая часть) и AL (младшая часть);</li>
          <li>АХ состоит из АН (старшая часть) и AL (младшая часть);</li>
        </ul>

        <CodeSection></CodeSection>
      </div>
      <div className="anchor-wrap">
        <div className="anchor">
          <ul>
            <li>[test]</li>
            <li>[test]</li>
            <li>[test]</li>
            <li>[test]</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Article
