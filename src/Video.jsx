import { useState } from "react";
import './styles/Materia.css';
import VideoModal from './VideoModal';

function Video(proops) {
  const { noticia, index } = proops;
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  const openModal = () => setIsModalOpen(true); // Abre o modal
  const closeModal = () => {console.log('Fechando modal...'); setIsModalOpen(false);}; // Fecha o modal

  return (
    <a onClick={openModal}>
      <li key={index} className="materia-item">
        <img src={noticia.image} alt={noticia.title} />
        <div className="materia-item-content">
            <label>Video</label>
            <h2>{noticia.title}</h2>
            <p>{noticia.summary}</p>
        </div>
      </li>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={noticia.video.source} />
    </a>
  );
}

export default Video;