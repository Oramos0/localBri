import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter.routes';
// * Auth Token to check all sesions
import setAuthToken from './utils/setAuthToken';
// * styles
import './index.css';
// * Ant-Design
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.min.js';
// * Provider and Store for Redux
import { Provider } from 'react-redux';
import store from './store';

import Footer from './shared/components/Footer/Footer.component'

const root = document.getElementById('root');
// * Set the Auth Token if an user is logged in
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRouter />
      <Footer/>
    </Router>
  </Provider>,
  root
);
