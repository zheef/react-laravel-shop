import '@/bootstrap';
import React from 'react';
import ReactDom from 'react-dom';
import App from '@components/App';
import StoreContext from '@/context/store';
import productsStore from '@/store/products';
import contactsStore from '@/store/contacts';
import cartStore from '@/store/cart';

const store = {
  products: productsStore,
  contacts: contactsStore,
  cart: cartStore,
};

ReactDom.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
