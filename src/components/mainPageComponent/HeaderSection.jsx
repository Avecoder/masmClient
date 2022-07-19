import './mainpage.scss'

import MyButton from '../../UI/button/MyButton'
import CodeSection from '../codeSection'

import { code } from '../../messages'

const HeaderSection = () => {


  const mess = 'Сделано студентами СПБГУТ для студентов СПБГУТ.'


  return (
    <section className="header-wrap">
      <div className="d-flex jcb header-section container">
        <div className="header-section__inf">
          <h1>TASM</h1>
          <p>Руководство по ассемблеру x86 для начинающих.</p>
          <MyButton pathname={'/documentation'}>Документация</MyButton>
        </div>
        <div className="header-section__code">
          <CodeSection mess={mess} code={code}></CodeSection>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection
