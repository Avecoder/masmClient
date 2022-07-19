import './mainpage.scss'
import MyButton from '../../UI/button/MyButton'
import asciiComp from '../../assets/img/ascii-comp.png'

const LearnSection = (props) => {
  return (
    <section className="bg-green">
      <div className="container d-grid learn-container">
        <div className="learn-inf">
          <h2>Чему ты научишься</h2>
          <div className="learn-inf__inner">
            <p>  INDEX COMMAND  DESC</p>
            <p>-------------------------------------------------</p>
            <p>  0     RUN      (ЗАПУСКАТЬ DOS BOX)</p>
            <p>  1     COMPILE  (КОМПИЛИРОВАТЬ КОД АССЕМБЛЕРА)</p>
            <p>  2     LINK     (СВЯЗЫВАТЬ MASM И CPP)</p>
            <p>  3     CODING   (ПИСАТЬ КОД НА MASM)</p>
          </div>
          <div className="learn-inf__inner">
            <p className="mt20 mb20">Поэтому не замедлительно переходи к документации</p>
            <MyButton pathname={'/documentation'}>Документация</MyButton>
          </div>
        </div>
        <div className="learn-img bg-dark">
          <img src={asciiComp} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default LearnSection
