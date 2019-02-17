import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import Label from '../Label';
import FieldError from '../FieldError';
import './styles.css';

const InputField = ({
  label,
  type,
  id,
  placeholder,
  onChangeAction,
  elmRef,
  isSubmitted,
  isValid,
  isRequired,
  validation
}) => {
  const value =
    elmRef && elmRef.current && elmRef.current.value
      ? elmRef.current.value
      : '';

  return (
    <Field>
      <div className="input-field">
        <Label text={label}>
          <input
            className="input-field__input"
            type={type}
            id={id}
            ref={elmRef}
            placeholder={placeholder}
            onChange={onChangeAction}
          />
        </Label>

        <FieldError
          value={value}
          isSubmitted={isSubmitted}
          isValid={isValid}
          isRequired={isRequired}
          validation={validation}
        />
      </div>
    </Field>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  elmRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.node })
  ]).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeAction: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  validation: PropTypes.oneOfType([
    PropTypes.shape({
      error: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    }),
    PropTypes.shape({
      error: PropTypes.string.isRequired,
      regex: PropTypes.string.isRequired
    })
  ])
};

export default InputField;
