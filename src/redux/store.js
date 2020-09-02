import { createStore, applyMiddleware } from 'redux';
import { persistStore } from "redux-persist";
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
// import thunk from 'redux-thunk';

import rootReducer from './root-reducer';
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

(process.env.NODE_ENV === 'development') && middlewares.push(logger)


const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor };