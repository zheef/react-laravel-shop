import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import OneProduct from '@components/OneProduct';
import StoreContext from '@/context/store';

function Product() {
  const { getProductByID } = useContext(StoreContext).products;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  id = parseInt(id, 10);
  useEffect(async () => {
    const { data } = await getProductByID(id);
    setProduct(data);
    setLoading(false);
  }, [setProduct]);

  return (
    <div>
      <OneProduct product={product} loading={loading} />
    </div>
  );
}

export default observer(Product);
