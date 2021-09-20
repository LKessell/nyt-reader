import './ArticleDetail.css';
import { useParams } from 'react-router-dom';

export const ArticleDetail = ({ articles }) => {
  let params = useParams();
  
  return (
    <section>
      <p>{articles[params.id].title}</p>
    </section>
  )
}