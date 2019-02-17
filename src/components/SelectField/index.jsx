import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import Label from '../Label';
import FieldError from '../FieldError';

const SelectField = ({
  label,
  id,
  onChangeAction,
  placeholder,
  options,
  isSubmitted,
  isValid,
  isRequired,
  elmRef,
  validation
}) => {
  const value =
    elmRef && elmRef.current && elmRef.current.value
      ? elmRef.current.value
      : '';

  return (
    <Field>
      <div className="select-field">
        <Label text={label}>
          <select
            id={id}
            ref={elmRef}
            defaultValue={null}
            onChange={onChangeAction}
          >
            <option value={null}>{placeholder}</option>
            {options &&
              options.length &&
              options.map(option => (
                <option
                  value={option.value}
                  key={option.value.replace(/ /, '')}
                >
                  {option.text}
                </option>
              ))}
          </select>
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

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  elmRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.node })
  ]).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeAction: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
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

export default SelectField;
