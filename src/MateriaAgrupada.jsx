function MateriaAgrupada (proops){
    const { noticias} = proops;
    return (
        console.log(noticias),
        <div className="materia-agrupada-container">
            {noticias.length > 0 ? (
                <ul className="materia-list">
                    {noticias.map((noticia, index) => (
                        <li key={index} className="materia-item">
                            <h2>{noticia.header}</h2>
                            <img src={noticia.image} alt={noticia.title} />
                            <div className="materia-item-content">
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