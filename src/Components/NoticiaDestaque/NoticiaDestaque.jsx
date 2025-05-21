import './NoticiaDestaque.css';

function NoticiaDestaque ({noticia}) {
    if (!noticia) return null;

    return (
        <a href={noticia.url} className='destaque-card-link'>
            <div className="destaque-card">
                    <div className='destaque-card-text'>
                        <label>{noticia.section}</label>
                        <h2>{noticia.title}</h2>
                        <p>{noticia.summary}</p>
                    </div>
                <img src={noticia.image} alt={noticia.title} />
            </div>
        </a>
    )
}
export default NoticiaDestaque;