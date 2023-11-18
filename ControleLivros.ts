import { Livro } from './Livro';

const livros: Livro[] = [
  new Livro(1, 1, 'Livro 1', 'Resumo do Livro 1', ['Autor 1', 'Autor 2']),
  new Livro(2, 2, 'Livro 2', 'Resumo do Livro 2', ['Autor 3', 'Autor 4']),
  new Livro(3, 3, 'Livro 3', 'Resumo do Livro 3', ['Autor 5', 'Autor 6']),
];

class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = Math.max(...livros.map((livro) => livro.codigo)) + 1;
    novoLivro.codigo = novoCodigo;
    livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
