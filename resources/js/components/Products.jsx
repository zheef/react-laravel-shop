import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Card, Col, Row } from 'react-bootstrap';
import StoreContext from '@/context/store';
import { toProductRoute } from '@/routes';

function Products() {
  const { products } = useContext(StoreContext);
  const { list, getProducts } = products;
  const productRows = list.map((product) => (
    <Col md={4} key={product.id}>
      <Card>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.total_price} &#x20bd;</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={toProductRoute(product.id)} className='btn btn-success'>
            Посмотреть
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  ));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Row xs={1} md={2} className='g-4'>
        {productRows}
      </Row>
    </>
  );
}

export default observer(Products);
