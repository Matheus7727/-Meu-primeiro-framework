import React, { useState, useEffect } from 'react';
import ControleLivros from './ControleLivros';
import ControleEditora from './ControleEditora';

function LinhaLivro({ livro, excluir }) {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  const handleExcluir = () => {
    excluir(livro.codigo);
  };

  return (
    <tr key={livro.codigo}>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button onClick={handleExcluir}>Excluir</button>
      </td>
    </tr>
  );
}

function LivroLista() {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const handleExcluir = (codigoLivro) => {
    controleLivro.excluir(codigoLivro);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro livro={livro} excluir={handleExcluir} key={livro.codigo} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;
