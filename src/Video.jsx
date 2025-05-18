import { useState } from "react";
import './styles/Materia.css';
import VideoModal from './VideoModal';

function Video(props) {
  const { noticia, index } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen(false); 
  return (
    <>
      <div onClick={openModal}>
        <li key={index} className="materia-item">
          <img src={noticia.image} alt={noticia.title} />
          <div className="materia-item-content">
              <label>Video</label>
              <h2>{noticia.title}</h2>
              <p>{noticia.summary}</p>
          </div>
        </li>
      </div>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={noticia.video.source} title ={noticia.title} />
    </>
  );
}

export default Video;