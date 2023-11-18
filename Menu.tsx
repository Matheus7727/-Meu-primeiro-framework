import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Página Inicial</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroLista">
              <a className="nav-link">Lista de Livros</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroDados">
              <a className="nav-link">Dados do Livro</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
