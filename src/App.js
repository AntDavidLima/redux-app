import { Provider } from 'react-redux';

import './global.css';

import store from './store/index';

import Routes from './routes';
import Catalog from './pages/Catalog/index';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
