import Materia from './Materia';
import Video from './Video';
import Anuncio from './Anuncio';

function Feed(proops) {
  const { noticias, error } = proops;

  if (error) {
    return <div>Erro: {error}</div>;
  }
  return (
    <div className="feed-container">
      {noticias.length > 0 ? (
        <ul className="feed-list">
          {noticias.map((noticia, index) => (
            <>
              {noticia.video == null ? (
                <Materia key={`noticia-${index}`} noticia={noticia} />
              ) : (
                <Video key={`noticia-${index}`} noticia={noticia} />
              )}
              {(index + 1) % 8 === 0 && (
                <Anuncio key={`anuncio-${index}`} />
              )}
            </>
          ))}
        </ul>
      ) : (
        <p>Carregando notícias...</p>
      )}
    </div>
  )
}

export default Feed;