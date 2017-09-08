import { pushState } from 'redux-router';
import { config } from '../config/config';

const authToken = (store) => (next) => (action) => {
  const state = store.getState();
  //const auth = state.authReducer.userAuth;
 // const isFail = state.authReducer.tokenRefreshFail;
  const dispatch = store.dispatch;
 // const date = new Date();
 //const exp = (parseInt(auth.expires_in, 10) * 1000) + auth.start - 60000;

  // if (action.res && action.res.response && action.res.response.status === 401) {
    // dispatch(pushState(false, config().logout));
  // }

  // if (!auth.refresh_token) {
    // return next(action);
  // }
  // a minute before the token is expiring request a new token

  return next(action);
};

export default authToken;
