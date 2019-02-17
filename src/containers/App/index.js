import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cookies from 'js-cookie';
import useAppReducer from '../../reducers/useAppReducer';
import { setUser } from '../../actions/users';
import Wrapper from '../../components/Wrapper';
import Routes from '../Routes';

const App = () => {
  const [state, dispatch] = useAppReducer();

  useEffect(() => {
    let cookie = Cookies.get('token');

    if (cookie) {
      cookie = JSON.parse(cookie);

      if (cookie.userId && cookie.token && cookie.tokenExpires) {
        const { userId, token, tokenExpires } = cookie;
        dispatch(setUser(userId, token, tokenExpires));
      }
    }
  });

  return (
    <Router>
      <Wrapper showMenu={state.showMenu}>
        <Routes />
      </Wrapper>
    </Router>
  );
};

export default App;
