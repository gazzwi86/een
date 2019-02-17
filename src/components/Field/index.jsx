import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Field = ({ children }) => <div className="field">{children}</div>;

Field.propTypes = {
  children: PropTypes.element.isRequired
};

export default Field;
