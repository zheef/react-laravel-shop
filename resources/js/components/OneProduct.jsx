import React from 'react';
import Count from '@components/Count';

function OneProduct({ product, loading }) {
  if (loading === true) {
    return <div>Подождите, идет загрузка</div>;
  }

  const { title, quantity, total_price } = product;

  return (
    <div>
      <h1>{title}</h1>
      <div className='my-2'>Цена: {total_price} руб.</div>
      <div className='my-2'>Остаток: {quantity} шт.</div>
      <Count max={quantity} />
    </div>
  );
}

export default OneProduct;
