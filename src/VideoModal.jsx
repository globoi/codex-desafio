import ReactModal from "react-modal";
import './styles/VideoModal.css';

ReactModal.setAppElement('#root');

function  VideoModal({isOpen, onClose, videoUrl, title}) {
    return (
        <>
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
            style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            content: { 
                margin: 'auto', 
                width: 'auto', 
                maxWidth: '90%',
                padding: '2rem', 
                background:'none', 
                border: 'none', 
                overflow:'hidden' 
            },
            }}
        >
            <div className="video-modal-content">
                <button className="close-button" onClick={onClose} autoFocus>X</button>
                <h2 className="video-title">{title}</h2>
                <video className="video-modal" controls width="100%">
                    <source src={videoUrl} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </div>
        </ReactModal>
        </>
    );
}

export default VideoModal;  