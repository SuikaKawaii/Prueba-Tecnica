import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Login from './components/Login';
import Menu from './components/Menu';
import { store } from './redux/store/store';
import AppRoutes from './routes/AppRoutes';


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider >,
  document.getElementById('root')
);

