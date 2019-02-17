import React from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import useAppReducer from '../../reducers/useAppReducer';
import constants from '../../constants';
import PageNotFound from '../PageNotFound';

const { ROUTES, HOME, LOGGED_IN, LOGGED_OUT } = constants;

const Routes = () => {
  const [{ token }] = useAppReducer();

  return (
    <Switch>
      {ROUTES.map(({ restricted, path, Component }) => {
        if (path === HOME) {
          return <Route key={path} exact path={path} component={Component} />;
        } else {
          return (
            <Route
              key={path}
              exact
              path={path}
              render={() => {
                if (!restricted && token) {
                  return <Redirect to={LOGGED_IN} />;
                } else if (restricted && !token) {
                  return <Redirect to={LOGGED_OUT} />;
                } else {
                  return <Component />;
                }
              }}
            />
          );
        }
      })}
      <PageNotFound />
    </Switch>
  );
};

export default withRouter(Routes);
