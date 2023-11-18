import React from 'react';
import ControleEditora from '../classes/controle/ControleEditora'; // Verifique o caminho correto do seu controlador de editoras
import { Livro } from '../classes/modelo/Livro'; // Verifique o caminho correto do seu modelo Livro

// Inicialização do controle de editoras
const controleEditora = new ControleEditora();

// Definição da interface para as props de LinhaLivro
interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

// Componente LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  // Método para obter o nome da editora
  const obterNomeEditora = (codEditora: number): string => {
    return controleEditora.getNomeEditora(codEditora);
  };

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{obterNomeEditora(livro.codEditora)}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};
