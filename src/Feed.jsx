import Materia from './Materia';

function Feed(proops) {
  const { noticias, error } = proops;

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <Materia noticias={noticias.filter(noticia => !noticia.header)} />
  );
}

export default Feed;