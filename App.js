import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import configureStore from './store';

const store = configureStore();

console.log(store);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App
