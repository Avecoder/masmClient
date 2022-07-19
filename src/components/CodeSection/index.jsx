import './codeSection.scss'

import Typewriter from "typewriter-effect"

const CodeSection = ({code, mess}) => {

  return (
    <div className="code bg-dark">
      <Typewriter onInit={(typewriter)=> {
           typewriter
            .typeString(mess)
            .pauseFor(1000)
            .deleteAll()

            code.forEach(item => {
              typewriter.typeString(item !== '-' ? `${item}<br/>` : `<div className='separator'></div><br>`)
            })

            typewriter.start()
         }}
       />
    </div>
  )
}

export default CodeSection
