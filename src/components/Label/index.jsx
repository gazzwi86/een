import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Label = ({ text, children }) => (
  <label className="label">
    <span className="label__text">{text}:</span>
    {children}
  </label>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Label;
