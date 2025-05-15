import Materia from './Materia';
import Video from './Video';

function Feed(proops) {
  const { noticias, error } = proops;

  if (error) {
    return <div>Erro: {error}</div>;
  }
  return (
    <div className="feed-container">
        {noticias.length > 0 ? (
          <ul className="feed-list">
            {noticias.map((noticia, index) => noticia.video == null ?(
              <Materia key={index} noticia={noticia} />
              ):(<Video key={index} noticia={noticia} />))}
            </ul>
          ) : (
            <p>Carregando notícias...</p>
          )}
    </div>
  )
}

export default Feed;