import './styles/Materia.css';

function Video(proops) {
  const { noticia, index } = proops;


  return (
    <a href= {noticia.url}>
      <li key={index} className="materia-item">
        <img src={noticia.image} alt={noticia.title} />
        <div className="materia-item-content">
          <h2>{noticia.title}</h2>
          <p>{noticia.summary}</p>
        </div>
      </li>
    </a>
  );
}

export default Video;