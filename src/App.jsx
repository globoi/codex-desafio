import { useEffect, useState } from 'react';
import './styles/App.css'
import Navbar from './Navbar.jsx'
import Feed from './Feed.jsx'
import MateriaAgrupada from './MateriaAgrupada.jsx';

function App() {
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasPage, setHasPage] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/feed/page/${page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar as notícias');
        }
        return response.json();
      })
      .then(data => {
        if (data.message) {
          console.log("sem mais noticias");
          setHasPage(false);
        }else{
          console.log(data);
          setNoticias(prev =>[...prev, ...data])}})
      .catch(error => setError(error.message));
  }, [page]);

  return (
    <div className="App-page">
      <Navbar />
      <div className="content-container">
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
  );
}

export default App;
