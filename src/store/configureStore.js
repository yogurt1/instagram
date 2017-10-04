// @flow

import { createStore, applyMiddleware } from 'redux';
import type { Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import type { State } from './State';
import reducer from './reducers'; 
import {
  fluture,
  promise
} from './middlewares';

const configureStore = (initialState?: State) => {
  const middlewares = applyMiddleware(thunk, fluture, promise);
  const enhance = composeWithDevTools(middlewares);
  const store: Store<State> = enhance(createStore)(reducer, initialState);

  if (module.hot) {
    (module: any).hot.accept('./reducers', async () => {
      const { default: nextReducer } = await import('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
