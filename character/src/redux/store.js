// REDUX
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// REDUX ROUTER
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// REDUCER
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history)

export const history = createHistory();

const store = createStore(
  combineReducers({
    reducer,
    router: routerReducer
  }),
    // reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, reduxRouterMiddleware))
  );  

  // applyMiddleware(reduxRouterMiddleware)

sagaMiddleware.run(rootSaga);

export default store;
