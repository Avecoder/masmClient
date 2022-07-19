import MyButton from '../UI/button/MyButton'

const Card = ({imageURL, _id, title, type}) => {
  return (
    <div className="card">
      <div className="card-preview" style={{backgroundImage: `url(${imageURL})`}}></div>
      <div className="d-flex jcb mt20 possy">
        <h3>{title?.substr(0, 18)}...</h3>
        <MyButton pathname={`/article/${_id}`}>Подробнее</MyButton>
      </div>
    </div>
  )
}

export default Card
