import "./styles/MateriaAgrupada.css";

function MateriaAgrupada (props){
    const { noticias} = props;
    return (
        <div className="agrupada-container">
            {noticias.length > 0 ? (
                <ul className="agrupada-list">
                    {noticias.map((noticia, index) => (
                        <li key={index} className="agrupada-item">
                            <h2>{noticia.header}</h2>
                            <img src={noticia.image} alt={noticia.title} />
                            <div className="agrupada-item-content">
                                {noticia.group && (
                                <ul className="group-item-list">
                                    {noticia.group.map((group, groupIndex) => (
                                    <li key={groupIndex} className="group-item">
                                        <a href={group.content.url}>{group.content.title}</a>
                                    </li>
                                    ))}
                                </ul>
                                )}
                            </div>
                            <a href = {noticia.footer.url}> {noticia.footer.label} </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Carregando notícias...</p>
            )}
        </div>
    );
}
export default MateriaAgrupada;