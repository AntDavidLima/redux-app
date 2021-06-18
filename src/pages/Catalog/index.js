import { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './style.css';

import api from '../../services/api';

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