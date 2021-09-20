import './App.css';
import { useState, useEffect } from 'react';
import { fetchArticles } from '../../apiCalls';
import { Header } from '../Header/Header';
import { ArticleList } from '../ArticleList/ArticleList';
import { Route } from 'react-router-dom';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then(data => setArticles(data.results))
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path='/'>
          <ArticleList articles={articles}/>
        </Route>
      </main>
    </div>
  );
}

export default App;
