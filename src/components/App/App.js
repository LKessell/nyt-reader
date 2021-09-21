import './App.css';
import { useState, useEffect } from 'react';
import { fetchArticles } from '../../apiCalls';
import { Header } from '../Header/Header';
import { ArticleList } from '../ArticleList/ArticleList';
import { ArticleDetail } from '../ArticleDetail/ArticleDetail';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/'>
            <ArticleList articles={articles}/>
          </Route>
          <Route exact path='/articles/:id'>
            <ArticleDetail articles={articles}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
