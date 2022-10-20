import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCard = useSelector(state => state.ui.isVisible);
  const cart = useSelector(state => state.card);
  console.log(showCard);

  useEffect(() => {
    fetch('https://cart-40a4c-default-rtdb.firebaseio.com/', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {showCard && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
