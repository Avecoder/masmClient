import Card from './Card'
import { Link } from 'react-router-dom'


const CardWrap = ({posts, selectIndex}) => {
  return (
    <div className="card-wrap">
      {
        selectIndex === 0
        ? posts.items.map(item =>
          <Card key={item._id}  {...item} />
        )
        : <ul>{
            posts.items.map(({_id, title}) =>
              <li key={_id}><Link to={`/article/${_id}`}>{title}</Link></li>
            )
          }</ul>
      }
    </div>
  )
}

export default CardWrap
