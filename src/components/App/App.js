import './App.css';
import { Header } from '../Header/Header';
import { ArticleList } from '../ArticleList/ArticleList';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path='/'>
          <ArticleList />
        </Route>
      </main>
    </div>
  );
}

export default App;
