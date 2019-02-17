import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ForgottenPassword from './containers/ForgottenPassword';
import Settings from './containers/Settings';
import Discover from './containers/Discover';
import Add from './containers/Add';
import Keen from './containers/Keen';
import Been from './containers/Been';

const home = '/';
const loggedIn = '/discover';
const loggedOut = '/login';

const constants = {
  API_URL: 'https://localhost:8443',
  API_PATH: '/api/v1',
  HOME: home,
  LOGGED_IN: loggedIn,
  LOGGED_OUT: loggedOut,
  ROUTES: [
    {
      restricted: false,
      path: home,
      name: 'Home',
      Component: Home
    },
    {
      restricted: false,
      path: loggedOut,
      name: 'Login',
      Component: Login
    },
    {
      restricted: false,
      path: '/signup',
      name: 'Signup',
      Component: Signup
    },
    {
      restricted: false,
      path: '/forgotten-password',
      name: 'Forgotten Password',
      Component: ForgottenPassword
    },
    {
      restricted: true,
      path: loggedIn,
      name: 'Discover',
      Component: Discover
    },
    {
      restricted: true,
      path: '/add',
      name: 'Add',
      Component: Add
    },
    {
      restricted: true,
      path: '/keen',
      name: 'Keen',
      Component: Keen
    },
    {
      restricted: true,
      path: '/been',
      name: 'Been',
      Component: Been
    },
    {
      restricted: true,
      path: '/settings',
      name: 'Settings',
      Component: Settings
    }
  ]
};

export default constants;
