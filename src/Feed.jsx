import Materia from './Materia';

function Feed(proops) {
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
              <Materia key={index} noticia={noticia} />
              ))}
            </ul>
          ) : (
            <p>Carregando notícias...</p>
          )}
    </div>
  )
}

export default Feed;