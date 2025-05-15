import React, { useEffect, useState } from 'react';
import './styles/App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Feed from './Feed.jsx'
import MateriaAgrupada from './MateriaAgrupada.jsx';

function App() {
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/feed/page/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar as notícias');
        }
        return response.json();
      })
      .then(data => setNoticias(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div className="App-page">
      <Navbar />
      <div className="content-container">
        <div className="Feed">
          <Feed noticias={noticias.filter(noticia => noticia.type === "materia")} error={error} />
        </div>
        <div className="materia-agrupada">
          <MateriaAgrupada noticias={noticias.filter(noticia => noticia.type === "agrupador-materia")} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
