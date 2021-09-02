import ReactDOM from 'react-dom';

const PortalModal = ({ children }) => {
  const portal = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, portal);
};

export default PortalModal;

// Parou Dev de componentes - Parte 4
