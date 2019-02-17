import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

const Button = ({ children, type, variation, to, action }) =>
  to ? (
    <NavLink
      className={classnames('button', {
        'button--secondary': variation === 'secondary',
        'button--right': type === 'submit'
      })}
      type={type}
      to={to}
    >
      {children}
    </NavLink>
  ) : (
    <button
      className={classnames('button', {
        'button--secondary': variation === 'secondary',
        'button--right': type === 'submit'
      })}
      type={type}
      onClick={e => action && action(e)}
    >
      {children}
    </button>
  );

Button.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string,
  variation: PropTypes.string,
  to: PropTypes.string,
  action: PropTypes.func
};

export default Button;
