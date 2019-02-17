import React from 'react';
import classnames from 'classnames';
import useAppReducer from '../../reducers/useAppReducer';
import { toggleMenu } from '../../actions/ui';
import './styles.css';

const MenuBtn = () => {
  const [{ showMenu }, dispatch] = useAppReducer();

  return (
    <div className={classnames('menu-btn', { 'menu-btn--active': showMenu })}>
      <button
        className="menu-btn__button"
        onClick={() => dispatch(toggleMenu(!showMenu))}
      >
        <div className="menu-line menu-line--top" />
        <div className="menu-line menu-line--center" />
        <div className="menu-line menu-line--bottom" />
      </button>
    </div>
  );
};

export default MenuBtn;
