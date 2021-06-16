import { useState, useEffect } from 'react';

import './style.css';

import api from '../../services/api';

import CatalogItem from '../../components/CatalogItem';

function Catalog() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get('products')
      .then(response => {
        setCatalog(response.data)
      });
  }, []);

  return (
    <div id="catalog-container">
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Catalog;