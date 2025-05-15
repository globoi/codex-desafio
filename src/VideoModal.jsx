import React from "react";
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
            <h2>Este é um Modal</h2>
            <button onClick={onClose}>Fechar</button>
        </ReactModal>
        </>
    );
}

export default VideoModal;