import '@testing-library/jest-dom';
import ReactModal from 'react-modal';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactModal.setAppElement('#root');