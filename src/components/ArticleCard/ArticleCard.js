import './ArticleCard.css';
import { Link } from 'react-router-dom';

export const ArticleCard = ({ id, data }) => {
  return (
    <Link to={`/articles/${id}`}>
      <article className='article-card'>
        <img src={data.multimedia[3].url} alt={data.multimedia[4].caption}/>
        <h3>{data.title}</h3>
      </article>
    </Link>
  )
}