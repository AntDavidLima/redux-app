import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector(state => state.cart.items);

  console.log(cart);
  
  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quatidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.product.id}>
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="products">
        Produtos
      </Link>
    </>
  );
}

export default Cart;