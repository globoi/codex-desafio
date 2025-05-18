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
            overlay: { 
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
            },
            content: { 
                margin: 'auto', 
                maxWidth: '100%',
                padding: '0', 
                background:'none', 
                border: 'none', 
                overflow:'hidden',
                boxSizing: 'border-box',
            },
            }}
        >
            <div className="video-modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="video-modal-container">
                    <h2 className="video-title">{title}</h2>
                    <video className="video-modal" controls>
                        <source src={videoUrl} type="video/mp4"/>
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
            </div>
        </ReactModal>
        </>
    );
}

export default VideoModal;