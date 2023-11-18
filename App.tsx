import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Livros</Link>
            </li>
            <li className="nav-item">
              <Link to="/dados" className="nav-link">Dados</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={LivroLista} />
        <Route path="/dados" component={LivroDados} />
      </div>
    </Router>
  );
}

export default App;
