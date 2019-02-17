import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Modal = ({ title, children }) => {
  return (
    <div className="modal">
      <div className="modal__page">
        <h1>{title}</h1>
        <section>{children}</section>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Modal;
