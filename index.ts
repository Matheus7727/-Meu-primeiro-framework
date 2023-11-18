import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora'; // Verifique o caminho correto do seu controlador de editoras

const controleEditora = new ControleEditora();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const editoras = controleEditora.getEditoras();
      return res.status(200).json(editoras);
    } else {
      return res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
