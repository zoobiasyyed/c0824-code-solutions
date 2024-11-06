import { useState } from 'react';
import { Modal } from './Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Me</button>
      <Modal onClose={onClose} isOpen={isOpen}>
        <p>Do u want to delete?</p>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <button onClick={() => setIsOpen(false)}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
