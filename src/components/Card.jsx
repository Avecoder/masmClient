import MyButton from '../UI/button/MyButton'

const Card = ({img, id, label}) => {
  return (
    <div className="card">
      <img src={`../src/assets/img/${img}.png`} alt=""/>
      <div className="d-flex jcb mt20 possy">
        <h3>[{label}]</h3>
        <MyButton pathname={`/article/${id}`}>Подробнее</MyButton>
      </div>
    </div>
  )
}

export default Card
