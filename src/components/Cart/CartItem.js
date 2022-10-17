import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from '../../store/slices/card';

const CartItem = props => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const items = useSelector(state => state.card.amount);

  const handleDecrement = () => {
    dispatch(cardActions.decrement(id));
  };
  const handleIncrement = () => {
    dispatch(cardActions.increment({ id, price, title }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
