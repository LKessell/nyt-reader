import { ArticleCard } from '../ArticleCard/ArticleCard';
import { Error } from '../Error/Error';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArticleList.css';
import { fetchArticles } from '../../apiCalls';
import { checkForError, headings } from '../../utilities';

export const ArticleList = ({ articles, setArticles }) => {
  let params = useParams();
  const [error, setError] = useState(null);

  const articleCards = articles.reduce((results, article, index) => {
    if (article.multimedia) {
      results.push(<ArticleCard key={index} id={index} data={article} type={params.type} />)
    }
    return results;
  }, []);
  const loading = !articles.length && !error && <h3>Loading your articles...</h3>;
  const errorMsg = error && <Error error={error} setError={setError}/>;
  
  useEffect(() => {
    fetchArticles(params.type)
      .then(checkForError)
      .then(data => setArticles(data.results))
      .catch(error => setError(error.message))
  }, [params.type, setArticles]);
  
  let sectionHeading = headings[params.type] ? headings[params.type] : 'Top Stories';
  
  return (
    <section className='article-list'>
      <h2 className='section-heading'>{sectionHeading}</h2>
      {errorMsg}
      {loading}
      {!error && articleCards}
    </section>
  )
}