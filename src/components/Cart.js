import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Cart() {
  const [totalItems, setTotalItems] = useState(0);

  const cart = useSelector(state => state.cart.items);

  useEffect(() => {
    if(cart.length !== 0) {
      const quantity = cart.reduce((acc, current) => acc.quantity + current.quantity);
      setTotalItems(quantity?.quantity ?? quantity);
    }
  }, [cart]);
  
  return(
    <>
      <IconButton edge="end" aria-label="cart">
        <Link to="/cart">
          <ShoppingCartIcon /> {totalItems}
        </Link>
      </IconButton>
    </>
  );
}

export default Cart;