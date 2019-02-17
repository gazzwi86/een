import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Error = ({ children }) => (
  <div className="error">
    <p>{children}</p>
  </div>
);

Error.propTypes = {
  children: PropTypes.string.isRequired
};

export default Error;
