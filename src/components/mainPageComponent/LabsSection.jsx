import './mainpage.scss'
import MyButton from '../../UI/button/MyButton'
import { Link } from 'react-router-dom'
import { githubUrl, telegramUrl } from '../../utils'
import telegramIcon from '../../assets/img/telegram.svg'
import githubIcon from '../../assets/img/github-dark.svg'



const LabsSection = (props) => {
  return (
    <section className="bg-orange">
      <div className="container d-grid labs-container">
        <div className="labs-content">
          <div className="labels d-flex aic">
            <img src={githubIcon} alt="icon"/>
            <h2>Примеры</h2>
          </div>
          <p>Разбор каждой лабораторных работы, чтобы тебе было легче понять, как работает ассемблер.</p>
          <p>Также, для удобства, ты можешь просмотреть все исходники на гитхаб</p>
          <div className="d-flex">
            <MyButton pathname={'/labs'}>Перейти к примерам</MyButton>
            <span>или</span>
            <a href={githubUrl} target="_blank">[github]</a>
          </div>
        </div>
        <div className="labs-content">
          <div className="labels d-flex aic">
            <img src={telegramIcon} alt="icon"/>
            <h2>Telegram</h2>
          </div>
          <p>Если же совсем не понимаешь ассемблер, с радостью, ждем тебя в нашем телеграм-боте, где тебе с удовольствием помогут.</p>
          <a href={telegramUrl} target="_blank">[Телеграм бот]</a>
        </div>
      </div>
    </section>
  )
}

export default LabsSection
