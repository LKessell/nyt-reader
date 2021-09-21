import './ArticleCard.css';
import { Link } from 'react-router-dom';

export const ArticleCard = ({ id, data, type }) => {
  return (
    <Link to={`/${type}/${id}`}>
      <article className='article-card'>
        <img src={data.multimedia[3].url} alt={data.multimedia[3].caption}/>
        <h3>{data.title}</h3>
      </article>
    </Link>
  )
}