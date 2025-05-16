import './styles/Materia.css';

function Materia(props) {
  const { noticia, index } = props;


  return (
    <li key={index} className="materia-item">
      <a href= {noticia.url} className='materia-link'>
        <img src={noticia.image} alt={noticia.title} />
      </a>
      <div className="materia-item-content">
        <label className="materia-item-label">{noticia.section}</label>
        <a href= {noticia.url} className='materia-link'>
          <h2>{noticia.title}</h2>
        </a>
        <p>{noticia.summary}</p>
      </div>
    </li>
  );
}

export default Materia;