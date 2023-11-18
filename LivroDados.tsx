import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import ControleEditora from '../classes/ControleEditora'; // Verifique o caminho correto do controlador
import { Livro } from '../models/Livro';

const LivroDados: React.FC = () => {
  const controleEditora = new ControleEditora();
  const baseURL = 'http://localhost:3000/api/livros';
  const [opcoes, setOpcoes] = useState<any[]>([]);
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);

  const incluirLivro = async (livro: Livro) => {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });
      return response.ok;
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      return false;
    }
  };

  const obterOpcoes = () => {
    const editoras = controleEditora.getEditoras();
    const options = editoras.map((editora: any) => ({
      value: editora.codEditora,
      text: editora.nome,
    }));
    setOpcoes(options);
  };

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const livro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };
    const result = await incluirLivro(livro);
    if (result) {
      // Redirecionamento para a página de lista de livros após inclusão
      // Utilize a navegação adequada para o seu projeto Next.js (ex: Router.push('/LivroLista'))
    }
  };

  return (
    <div className={styles.container}>
      {/* Componente Head e Menu aqui */}

      <main>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          {/* Campos restantes do formulário */}
          <button type="submit">Incluir Livro</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
