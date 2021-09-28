import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import StoreContext from '@/context/store';

function ResultForm() {
  const { username, email, phone } = useContext(StoreContext).contacts;
  return (
    <div>
      <h1>{username}, спасибо за заказ!</h1>
      <h3>Сумма заказа: руб.</h3>
      <h3>Email: {email}</h3>
      <h3>Телефон: {phone}</h3>
    </div>
  );
}

export default observer(ResultForm);
