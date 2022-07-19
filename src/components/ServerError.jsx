import Typewriter from "typewriter-effect"
import { internalServerError } from '../messages'

const ServerError = (props) => {


  return (
    <div className="server-error">
      <div className="server-error__info">
        <Typewriter onInit={(typewriter)=> {
             typewriter
              .typeString(`Произошла ошибка на сервере`)
              .pauseFor(100)
              .typeString(`<div className='separator'></div><br>`)
              .pauseFor(100)
              .typeString(`Простите за доставленные неудобства`)
              .deleteAll()

              internalServerError.forEach(item => {
                typewriter.typeString(item !== '-' ? `${item}<br/>` : `<div className='separator'></div><br>`)
              })

              typewriter.start()
           }}
         />
      </div>
    </div>
  )
}

export default ServerError
