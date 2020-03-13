import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';

import PublicRoutes from './public/Public.routes';
import PrivateRoutes from './private/Private.routes';

import App from '../App/App';

const AppRouter = ({ loadUser, isAuthenticated, loading }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <App>
      <Switch>
        {!isAuthenticated && !loading ? <PublicRoutes /> : <PrivateRoutes />}
      </Switch>
    </App>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { loadUser })(AppRouter);
