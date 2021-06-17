import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './global.css';

import store from './store/index';

import Routes from './routes';
import history from './history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
