import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login/index';
import Signin from './pages/Signin/index';
import Catalog from './pages/Catalog/index';
import Cart from './pages/Cart/index';
import PrivateRoute from './components/PrivateRoute';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signin' component={Signin} />
        <PrivateRoute path='/products' component={Catalog} />
        <PrivateRoute path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}