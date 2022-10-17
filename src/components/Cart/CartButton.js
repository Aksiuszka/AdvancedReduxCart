import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slices/UI';

const CartButton = props => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state=>state.card.totalQuantity)
  console.log(cartQuantity)
  const handleClick = () => {
    console.log('dispatch');
    dispatch(uiActions.toggle());
    console.log('dispatch');
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
