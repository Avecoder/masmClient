import './mainpage.scss'

const LearnSection = (props) => {
  return (
    <section className="bg-dark">
      <div className="container d-flex jcb">
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
        </div>
        <div className="learn-img">
          <img src="../src/assets/img/ascii-comp.png" alt=""/>
        </div>
      </div>
    </section>
  )
}

export default LearnSection
