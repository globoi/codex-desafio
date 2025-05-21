import './Materia.css';

function Anuncio(proops) {
  const { index } = proops;
  return (
     <li key={index} className="materia-item">
      <a href= "" className='materia-link'>
        <img src="https://picsum.photos/600/400" alt="Anúncio" />
      </a>
      <div className="materia-item-content">
        <label className="materia-item-label">Anunciante</label>
        <a href= "" className='materia-link'>
          <h2>Deixe aqui o seu anúncio.</h2>
        </a>
        <p>Descrição do anúncio</p>
      </div>
    </li>
  );
}
export default Anuncio;