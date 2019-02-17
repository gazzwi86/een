import { useReducer } from 'react';
import { combineReducers } from 'redux';
import places from './places';
import cities from './cities';
import user from './user';
import ui from './ui';

const useAppReducer = () =>
  useReducer(
    combineReducers({
      places,
      cities,
      user,
      ui
    }),
    {}
  );

export default useAppReducer;
