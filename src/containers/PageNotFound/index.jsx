import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../components/Button';

const PageNotFound = ({ history }) => (
  <div className="page-not-found">
    <h1>404: Page not found</h1>
    <p>It doesn't look like that page exists</p>

    <Button action={() => history.goBack()}>
      <span>Back</span>
    </Button>
  </div>
);

export default withRouter(PageNotFound);
