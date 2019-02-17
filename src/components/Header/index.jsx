import React from 'react';
import { NavLink } from 'react-router-dom';
import useAppReducer from '../../reducers/useAppReducer';
import { logout } from '../../actions/users';
import logo from '../../assets/svgs/logo.svg';
import Button from '../Button';
import MenuBtn from '../MenuBtn';
import './styles.css';

const Header = () => {
  const [{ token }, dispatch] = useAppReducer();

  return (
    <header className="header">
      <div className="header__menu-btn">
        <MenuBtn />
      </div>

      <NavLink to="/" className="header__logo">
        <img src={logo} alt="Trippr" height="20rem" />
      </NavLink>

      <div className="header__session-btns">
        {!token && <NavLink to="/login">Login</NavLink>}
        {token && (
          <Button action={() => dispatch(logout())}>
            <span>Logout</span>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
