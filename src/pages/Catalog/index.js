import { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import './style.css';

import api from '../../services/api';
import { logout } from '../../services/auth';

import CatalogItem from '../../components/CatalogItem';
import Cart from '../../components/Cart';

function Catalog() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get('products')
      .then(response => {
        setCatalog(response.data)
      });
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Produtos
          </Typography>
          <Cart />
          <Link>
            <Button onClick={() => logout()}>
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <br />
      <div id="catalog-container">
        {catalog.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Catalog;