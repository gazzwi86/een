import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Field from '../Field';
import Label from '../Label';
import FieldError from '../FieldError';
import './styles.css';

const AutosuggestField = ({
  label,
  type,
  id,
  elmRef,
  placeholder,
  onChangeAction,
  isSubmitted,
  isValid,
  isRequired,
  validation
}) => {
  const value =
    elmRef && elmRef.current && elmRef.current.value
      ? elmRef.current.value
      : '';
  const [state, setState] = useState({
    cities: [],
    activeSuggestion: 0, // The active selection's index
    filteredSuggestions: [] // The suggestions that match the user's input
  });

  let suggestionsComponent;
  const { activeSuggestion, filteredSuggestions } = state;

  const onChange = e => {
    e.preventDefault();

    const suggestions = state.cities.map(i => `${i.name}, ${i.country}`);
    const userInput = elmRef.current.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true
    });

    onChangeAction(e);
  };

  const onKeyDown = e => {
    e.preventDefault();

    switch (e.keyCode) {
      case 13:
        elmRef.current = filteredSuggestions[activeSuggestion];

        return setState({
          activeSuggestion: 0
        });

      case 38:
        if (activeSuggestion === 0) {
          return;
        }

        return setState({ activeSuggestion: activeSuggestion - 1 });

      case 40:
        if (activeSuggestion - 1 === filteredSuggestions.length) {
          return;
        }

        return setState({ activeSuggestion: activeSuggestion + 1 });

      default:
        return;
    }
  };

  if (elmRef.current && elmRef.current.length >= 3) {
    if (filteredSuggestions && filteredSuggestions.length) {
      suggestionsComponent = (
        <ul className="autosuggest-field__suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            return (
              <li
                className={classnames({
                  'autosuggest-field__suggestion': true,
                  'autosuggest-field__suggestion--active':
                    index === activeSuggestion
                })}
                onClick={e => this.onDestinationKeyDown(e)}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsComponent = (
        <div class="autosuggest-field__suggestions--none">
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }

  return (
    <Field>
      <div className="autosuggest-field">
        <Label text={label}>
          <input
            className="autosuggest-field__input"
            type="text"
            id={id}
            ref={elmRef}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoComplete="off"
          />

          {suggestionsComponent}
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

AutosuggestField.propTypes = {
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

export default AutosuggestField;
