import Head from 'next/head';
import { Menu } from '../components/Menu';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>

      <Menu />

      <main className="styles.main">
        <h1 className="styles.title">Página Inicial</h1>
        {/* Outros conteúdos ou componentes aqui, se necessário */}
      </main>
    </div>
  );
};

export default Home;
