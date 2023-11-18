import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/controle/ControleLivros'; // Verifique o caminho correto do seu controlador de livros

const controleLivro = new ControleLivros();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      controleLivro.excluir(Number(codigo));
      return res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } else {
      return res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
