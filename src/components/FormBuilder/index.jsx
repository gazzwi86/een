import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from './validator';
import AutosuggestField from '../AutosuggestField';
import InputField from '../InputField';
import SelectField from '../SelectField';
import Button from '../Button';
import Error from '../Error';

const validatorTypes = ['text', 'email', 'password', 'select'];
const initChildState = form =>
  form && form.length
    ? form.map(elm => (validatorTypes.indexOf(elm.type) >= 0 ? false : true))
    : [];

const FormBuilder = ({ form, onSubmit, error }) => {
  const [state, setState] = useState({
    isValid: initChildState(form),
    isSubmitted: false,
    error: ''
  });

  const onInputChange = (e, i, validation) => {
    e.preventDefault();

    const { isValid } = state;
    const elmRef = form[i].elmRef;
    const value =
      elmRef && elmRef.current && elmRef.current.value
        ? elmRef.current.value
        : '';

    isValid[i] = validator(validation, form[i].isRequired, value);

    setState({
      ...state,
      isValid
    });
  };

  const submit = e => {
    e.preventDefault();

    const { isValid } = state;

    if (isValid.indexOf(false) >= 0) {
      setState({
        ...state,
        isSubmitted: true
      });
    } else {
      setState({
        ...state,
        isSubmitted: false
      });

      onSubmit();
    }
  };

  const { isValid, isSubmitted } = state;

  return (
    <form className="form-builder" onSubmit={submit} noValidate>
      {error && <Error>{error}</Error>}

      {form &&
        form.length &&
        form.map((elm, i) => {
          switch (elm.type) {
            case 'autosuggest':
              return (
                <AutosuggestField
                  key={elm.id}
                  {...elm}
                  onChangeAction={e => onInputChange(e, i, elm.validation)}
                  isValid={isValid[i]}
                  isSubmitted={isSubmitted}
                />
              );

            case 'number':
            case 'text':
            case 'email':
            case 'password':
              return (
                <InputField
                  key={elm.id}
                  {...elm}
                  onChangeAction={e => onInputChange(e, i, elm.validation)}
                  isValid={isValid[i]}
                  isSubmitted={isSubmitted}
                />
              );

            case 'select':
              return (
                <SelectField
                  key={elm.id}
                  {...elm}
                  onChangeAction={e => onInputChange(e, i, elm.validation)}
                  isValid={isValid[i]}
                  isSubmitted={isSubmitted}
                />
              );

            case 'submit':
            case 'button':
              return (
                <Button key={elm.id} {...elm}>
                  <span>{elm.children}</span>
                </Button>
              );

            default:
              return false;
          }
        })}
    </form>
  );
};

SelectField.propTypes = {
  form: PropTypes.arrayOf([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      elmRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.node })
      ]).isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.element,
      placeholder: PropTypes.string,
      onChangeAction: PropTypes.func,
      isRequired: PropTypes.bool,
      isSubmitted: PropTypes.bool,
      isValid: PropTypes.bool,
      options: PropTypes.string,
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
    }).isRequired
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default FormBuilder;
