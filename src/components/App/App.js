import './App.css';
import { useState } from 'react';
import { Header } from '../Header/Header';
import { ArticleList } from '../ArticleList/ArticleList';
import { ArticleDetail } from '../ArticleDetail/ArticleDetail';
import { NavBar } from '../NavBar/NavBar';
import { Error } from '../Error/Error';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const articleDetail = articles.length ? <ArticleDetail articles={articles}/> : <Redirect to='/home' />;

  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route exact path='/:type'>
            <ArticleList articles={articles} setArticles={setArticles}/>
          </Route>
          <Route exact path='/:type/:id'>
            {articleDetail}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
