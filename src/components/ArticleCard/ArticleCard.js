import './ArticleCard.css';

export const ArticleCard = ({ data }) => {
  return (
    <article className='article-card'>
      <img src={data.multimedia[3].url} alt={data.multimedia[4].caption}/>
      <h3>{data.title}</h3>
    </article>
  )
}