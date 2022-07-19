import './ButtonIcon.scss'


const ButtonIcon = ({children, valueRef}) => {
  return (
    <div className="buttonWrapIcon">
      <button onClick={() => valueRef.current.click()}>{children}</button>
    </div>
  )
}

export default ButtonIcon
