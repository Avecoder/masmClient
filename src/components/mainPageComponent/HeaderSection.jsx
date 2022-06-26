import './mainpage.scss'

import MyButton from '../../UI/button/MyButton'
import CodeSection from '../CodeSection'

const HeaderSection = (props) => {
  return (
    <section className="header-wrap">
      <div className="d-flex jcb header-section container">
        <div className="header-section__inf">
          <h1>MASM</h1>
          <p>Документация для языка ассемблера masm. Сделано студентами СПБГУТ для студентов СПБГУТ.</p>
          <MyButton pathname={'/documentation'}>Документация</MyButton>
        </div>
        <div className="header-section__code">
          <CodeSection></CodeSection>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection
