import ReactModal from "react-modal";

ReactModal.setAppElement('#root');

function  VideoModal({isOpen, onClose, videoUrl}) {
    return (
        <>
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
            style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            content: { margin: 'auto', width: '50%', padding: '2rem' },
            }}
        >
            <h2>Vídeo</h2>
            <video controls width="100%">
                <source src={videoUrl} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            <button onClick={onClose}>Fechar</button>
        </ReactModal>
        </>
    );
}

export default VideoModal;  