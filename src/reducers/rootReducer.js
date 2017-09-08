import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import worklistReducer from './worklistReducer';

const rootReducer = combineReducers({
  router,
  worklistReducer
});

export default rootReducer;
