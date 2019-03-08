import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import errorMiddleware from './lib/middlewares/errorMiddleware';
import { fetchJSON } from './lib/fetch';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function configureStore(preloadedState, config, env) {
  const middlewares = [
    thunkMiddleware.withExtraArgument({
      getConfig: () => config,
      fetchJSON: fetchJSON(config.endpoint),
    }),
    errorMiddleware,
    promise,
  ];

  if (env.NODE_ENV !== 'production') {
    const logger = require('redux-logger');
    middlewares.push(logger.createLogger({ collapsed: true }));
  }

  return createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(...middlewares),
  );
}

export function getPersistor(store) {
  return persistStore(store);
}
