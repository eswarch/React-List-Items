import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHashHistory as createHistory } from 'history';
import thunk from 'redux-thunk';
import routes from '../config/routes';
import rootReducer from '../reducers/rootReducer';
import authToken from '../middleware/utils';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
      applyMiddleware(thunk, authToken),
      reduxReactRouter({
        routes,
        createHistory
      }),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
