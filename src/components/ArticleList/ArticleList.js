import { ArticleCard } from '../ArticleCard/ArticleCard';
import './ArticleList.css';

export const ArticleList = ({ articles }) => {
  const articleCards = articles.map((article, index) => {
    return (
      <ArticleCard key={index} id={index} data={article} />
    )
  });
  
  return (
    <section className='article-list'>
      <h2 className='section-heading'>Top Stories</h2>
      {articleCards}
    </section>
  )
}