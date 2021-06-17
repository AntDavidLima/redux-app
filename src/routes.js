import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import Signin from './pages/Signin/index';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signin' component={Signin} />
    </Switch>
  )
}