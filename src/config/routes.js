import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import Login from 'containers/Login';
import Worklist from 'containers/Worklist';

export default (
  <Route path="/" component={ Worklist } >
   <IndexRoute component={Worklist} />
 </Route>
);
