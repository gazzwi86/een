import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import useAppReducer from '../../reducers/useAppReducer';
import Nav from '../Nav';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';

const Wrapper = ({ children }) => {
  const [{ showMenu }] = useAppReducer();

  return (
    <div className="wrapper">
      <div
        className={classnames('wrapper__page', {
          'wrapper__page--menu-active': showMenu
        })}
      >
        <Nav />

        <Header />

        <main className="wrapper__main">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.element.isRequired
};

export default Wrapper;
