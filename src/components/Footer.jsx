import githubIcon from '../assets/img/github-dark.svg'
import telegramIcon from '../assets/img/telegram.svg'
import youtubeIcon from '../assets/img/video.svg'
import { githubUrl, telegramUrl, youtubeUrl } from '../utils'

const Footer = (props) => {

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="footer d-flex jcb container">
      <div className="sociable">
        <div className="sociable-label">Оставайтесь на связи:</div>
        <div className="sociable-inner d-flex aic">
          <a href={githubUrl} target="_blank">
            <img src={githubIcon} alt=""/>
          </a>
          <a href={telegramUrl} target="_blank">
            <img src={telegramIcon} alt=""/>
          </a>
          <a href={youtubeUrl} target="_blank">
            <img src={youtubeIcon} alt=""/>
          </a>
        </div>
      </div>
      <div className="copyrigth">
        SUT © 2022
      </div>
      <div className="back-top">
        <button onClick={scrollToTop}>
          [Вернуться к началу]
        </button>
      </div>
    </div>
  )
}

export default Footer
