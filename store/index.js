import { Platform } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const configureStore = preloadedState => {
  const middlewareEnhancer = applyMiddleware(thunk);

  const enhancer = compose(
    middlewareEnhancer,
    devTools({
      realtime: true,
    })
  );

  const store = createStore(rootReducer, preloadedState, enhancer);

  return store;
};

export default configureStore;