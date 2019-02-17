import React from 'react';
import PropTypes from 'prop-types';
import Error from '../Error';

const FieldError = ({
  value,
  isSubmitted,
  isValid,
  isRequired,
  validation
}) => (
  <div className="field-error">
    {isSubmitted && !isValid && (
      <Error>
        {isRequired && !value
          ? 'This field is required'
          : validation && validation.error}
      </Error>
    )}
  </div>
);

FieldError.defaultProps = {
  value: ''
};

FieldError.propTypes = {
  value: PropTypes.string,
  isSubmitted: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool.isRequired,
  validation: PropTypes.shape({
    error: PropTypes.string.isRequired
  })
};

export default FieldError;
