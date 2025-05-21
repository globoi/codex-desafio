import { useEffect, useState } from 'react';
import './App.css'
import Navbar from '../Navbar/Navbar.jsx'
import NoticiaDestaque from '../NoticiaDestaque/NoticiaDestaque.jsx';
import Feed from '../Feed/Feed.jsx'
import MateriaAgrupada from '../MateriaAgrupada/MateriaAgrupada.jsx';

function App() {
  const [noticias, setNoticias] = useState([]);
  const [noticiaDestaque, setNoticiaDestaque] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasPage, setHasPage] = useState(true);
  const apiUrl = `${import.meta.env.VITE_API_URL}${page}`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar as notícias');
        }
        return response.json();
      })
      .then(data => {
        if (data.message) {
          setHasPage(false);
        }else {
          if (page === 1) {
            const primeira = data.find(n => n.type === 'materia'&& !n.video);
            const resto = data.filter(n => n !== primeira);

            setNoticiaDestaque(primeira);
            setNoticias(resto);
          } else {
            setNoticias(prev => [...prev, ...data]);
          }
      }})
      .catch(error => setError(error.message));
  }, [page]);

  return (
    <div className="App-page">
      <Navbar />
      <div className="content-container">
        <div className='noticia-destaque'>
          <NoticiaDestaque noticia={noticiaDestaque} />
        </div>
        <div className='main-content'>
          <div className="Feed">
            <Feed noticias={noticias.filter(noticia => noticia.type === "materia")} error={error} />
              {hasPage ? (
            <button className="load-more-button" onClick={() => setPage(page + 1)}>
              Ver Mais
            </button>) : (<></>)}
          </div>
          <div className="materia-agrupada">
            <MateriaAgrupada noticias={noticias.filter(noticia => noticia.type === "agrupador-materia")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
