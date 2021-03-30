import React, { useEffect, useCallback } from 'react';

import './Overlay.css';

const Overlay = ({
  onClose,
}) => {
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  return (
    <div
      className="overlay"
      onClick={onClose}
      onKeyPress={onClose}
      role="button"
      tabIndex="0"
    />
  );
};

export default Overlay;
