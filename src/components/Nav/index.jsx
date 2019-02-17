import React from 'react';
import { NavLink } from 'react-router-dom';
import constants from '../../constants';
import useAppReducer from '../../reducers/useAppReducer';
import { toggleMenu } from '../../actions/ui';
import './styles.css';

const { ROUTES } = constants;

const Nav = () => {
  const [{ token, showMenu }, dispatch] = useAppReducer();

  return (
    <nav className="nav" role="navigation">
      <h2 className="nav__heading">Menu</h2>

      <ul className="nav__list">
        {ROUTES.filter(({ restricted }) =>
          token ? restricted : !restricted
        ).map(({ restricted, path, name }) => (
          <li className="nav__list-item" key={path}>
            <NavLink to={path} onClick={() => dispatch(toggleMenu(!showMenu))}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
