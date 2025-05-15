import './styles/Materia.css';

function Materia(proops) {
  const { noticias, error } = proops;

  if (error) {
    return <div>Erro: {error}</div>;
  }
  return (
    <div className="materia-container">
      <h1>Notícias</h1>
      {noticias.length > 0 ? (
        <ul className="materia-list">
          {noticias.map((noticia, index) => (
            <a href= {noticia.url}>
              <li key={index} className="materia-item">
                <img src={noticia.image} alt={noticia.title} />
                <div className="materia-item-content">
                  <h2>{noticia.title}</h2>
                  <p>{noticia.summary}</p>
                </div>
              </li>
              </a>
          ))}
        </ul>
      ) : (
        <p>Carregando notícias...</p>
      )}
    </div>
  );
}

export default Materia;