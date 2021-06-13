import { useState, useEffect } from 'react';

import api from '../services/api';

function Catalog() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get('products')
      .then(response => setCatalog(response.data));
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span> {'   '}
          <button type="button">Comprar</button>
        </article>
      ))}
    </>
  )
}

export default Catalog;