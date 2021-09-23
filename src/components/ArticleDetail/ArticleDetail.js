import './ArticleDetail.css';
import { useParams } from 'react-router-dom';
import { getDateString } from '../../utilities';

export const ArticleDetail = ({ articles }) => {
  let params = useParams();
  const article = articles.find(article => article.id === params.id);
  
  return (
    <section className='article-detail'>
      <h2>{article.title}</h2>
      <p>{article.byline}</p>
      <p>{getDateString(article.published_date)}</p>
      <img className='detail-img' src={article.multimedia[0].url} alt={article.multimedia[4].caption} />
      <p>{article.abstract}</p>
      <a className='nyt-link' href={article.url}>Click to continue reading...</a>
    </section>
  )
}