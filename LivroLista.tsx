import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { LinhaLivro } from '../components/LinhaLivro';
import { Livro } from '../models/Livro';

const LivroLista: React.FC = () => {
  const baseURL = 'http://localhost:3000/api/livros';
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  const obter = async () => {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      setLivros(data);
      setCarregado(true);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const excluirLivro = async (codigo: number) => {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      return response.ok;
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      return false;
    }
  };

  useEffect(() => {
    obter();
  }, []);

  const excluir = async (codigo: number) => {
    const result = await excluirLivro(codigo);
    if (result) {
      setCarregado(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Componente Head e Menu aqui */}

      <main>
        <h1>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Editora</th>
              <th>Autores</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {carregado &&
              livros.map((livro) => (
                <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
